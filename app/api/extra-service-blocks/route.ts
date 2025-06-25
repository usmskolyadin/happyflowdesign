import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { uploadToS3 } from '@/app/lib/s3';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rangeParam = searchParams.get('range');
  const sortParam = searchParams.get('sort');
  const [start = 0, end = 9] = rangeParam ? JSON.parse(rangeParam) : [0, 9];
  const [field = 'order', orderDir = 'asc'] = sortParam ? JSON.parse(sortParam) : ['order', 'asc'];

  const total = await prisma.extraServiceBlock.count();
  const data = await prisma.extraServiceBlock.findMany({
    skip: start,
    take: end - start + 1,
    orderBy: {
      [field]: orderDir.toLowerCase() as 'asc' | 'desc',
    },
  });

  const res = NextResponse.json(data);
  res.headers.set('X-Total-Count', total.toString());
  res.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  return res;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get('title')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const footerText = formData.get('footerText')?.toString() || '';
    const image = formData.get('image') as File | null;
    const file = formData.get('file') as File | null;
    const listItemsRaw = formData.getAll('listItems').map(item => item.toString());

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      );
    }

    let imageUrl = '';
    let fileUrl = '';

    if (image && image.size > 0) {
      imageUrl = await uploadToS3(image);
    }

    if (file && file.size > 0) {
      fileUrl = await uploadToS3(file);
    }

    const created = await prisma.extraServiceBlock.create({
      data: {
        title,
        description,
        footerText,
        imageUrl,
        fileUrl,
        listItems: listItemsRaw,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { error: 'Failed to create record' },
      { status: 500 }
    );
  }
}
