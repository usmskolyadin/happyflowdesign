import { uploadToS3 } from '@/app/lib/s3';
import { prisma } from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);

  try {
    const record = await prisma.readyPackage.findUnique({ where: { id } });

    if (!record) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(record);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);

  const formData = await req.formData();

  const title = formData.get('title')?.toString() || '';
  const price = formData.get('price')?.toString() || '';
  const buttonText = formData.get('buttonText')?.toString() || '';
  const features = formData.getAll('features').map(item => item.toString());
  const existingImageUrl = formData.get('existingImageUrl')?.toString() || '';
  const image = formData.get('image') as File;

  let imageUrl = existingImageUrl;
  if (image && image.size > 0) {
    imageUrl = await uploadToS3(image);
  }

  const updated = await prisma.readyPackage.update({
    where: { id },
    data: {
      title,
      price,
      buttonText,
      features,
      imageUrl,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);

  await prisma.readyPackage.delete({ where: { id: id } });
  return NextResponse.json({ success: true });
}
