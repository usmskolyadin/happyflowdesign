import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { uploadToS3 } from '@/app/lib/s3';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rawFilter = searchParams.get('filter');
  const rawRange = searchParams.get('range');
  const rawSort = searchParams.get('sort');

  let filter: Record<string, any> = {};
  if (rawFilter) {
    try {
      filter = JSON.parse(rawFilter);
    } catch {
      return NextResponse.json({ error: 'Invalid filter' }, { status: 400 });
    }
  }

  let range: [number, number] = [0, 9];
  if (rawRange) {
    try {
      range = JSON.parse(rawRange);
    } catch {
      return NextResponse.json({ error: 'Invalid range' }, { status: 400 });
    }
  }

  // ✅ Используем безопасное значение по умолчанию
  let sort: [string, 'asc' | 'desc'] = ['id', 'asc'];
  if (rawSort) {
    try {
      const parsed = JSON.parse(rawSort);
      if (Array.isArray(parsed) && parsed.length === 2) {
        const validFields = ['id', 'title', 'imageUrl', 'price', 'buttonText', 'createdAt', 'updatedAt'];
        const field = parsed[0];
        const direction = parsed[1].toLowerCase() === 'desc' ? 'desc' : 'asc';

        if (validFields.includes(field)) {
          sort = [field, direction];
        } else {
          return NextResponse.json({ error: `Invalid sort field: ${field}` }, { status: 400 });
        }
      }
    } catch {
      return NextResponse.json({ error: 'Invalid sort format' }, { status: 400 });
    }
  }

  try {
    const total = await prisma.readyPackage.count({ where: filter });

    const data = await prisma.readyPackage.findMany({
      where: filter,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sort[0]]: sort[1] },
    });

    const res = NextResponse.json(data);
    res.headers.set('X-Total-Count', total.toString());
    res.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const title = formData.get('title')?.toString() || '';
  const price = formData.get('price')?.toString() || '';
  const buttonText = formData.get('buttonText')?.toString() || '';
  const features = formData.getAll('features').map(item => item.toString());
  const image = formData.get('image') as File;

  let imageUrl = '';
  if (image && image.size > 0) {
    imageUrl = await uploadToS3(image);
  }

  const created = await prisma.readyPackage.create({
    data: {
      title,
      price,
      buttonText,
      features,
      imageUrl,
    },
  });

  return NextResponse.json(created, { status: 201 });
}
