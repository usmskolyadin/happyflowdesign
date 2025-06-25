import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { uploadToS3 } from '@/app/lib/s3';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rawFilter = searchParams.get('filter');
  const rawRange = searchParams.get('range');
  const rawSort = searchParams.get('sort');

  let filter = {};
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

  let sort: [string, 'asc' | 'desc'] = ['id', 'asc'];
    if (rawSort) {
    try {
        const parsed = JSON.parse(rawSort);
        if (Array.isArray(parsed) && parsed.length === 2) {
        const field = parsed[0];
        const direction = parsed[1].toLowerCase() === 'desc' ? 'desc' : 'asc'; // ✅ lowercase

        sort = [field, direction];
        }
    } catch {
        return NextResponse.json({ error: 'Invalid sort format' }, { status: 400 });
    }
    }


  try {
    const total = await prisma.repair.count({ where: filter });

    const data = await prisma.repair.findMany({
      where: filter,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sort[0]]: sort[1] },
      include: { type: true },
    });

    const res = NextResponse.json(data);
    res.headers.set('X-Total-Count', total.toString());
    res.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const title = formData.get('title')?.toString() || '';
  const typeId = Number(formData.get('typeId'));
  const price = Number(formData.get('price'));
  const area = Number(formData.get('area'));
  const duration = formData.get('duration')?.toString() || '';
  const rooms = Number(formData.get('rooms'));
  const workList = formData.getAll('workList').map(item => item.toString());
  const photoFiles = formData.getAll('photos') as File[];

  const uploadedUrls: string[] = [];

  for (const file of photoFiles) {
    if (file instanceof File && file.size > 0) {
      const url = await uploadToS3(file);
      uploadedUrls.push(url);
    }
  }

  try {
    const created = await prisma.repair.create({
      data: {
        title,
        typeId,
        price,
        area,
        duration,
        rooms,
        workList,
        photos: uploadedUrls,
      },
    });
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error('CREATE ERROR:', e);
    return NextResponse.json({ error: 'Create failed' }, { status: 500 });
  }
}