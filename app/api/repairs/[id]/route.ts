import { uploadToS3 } from '@/app/lib/s3';
import { prisma } from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  const record = await prisma.repair.findUnique({
    where: { id },
    include: { type: true },
  });
  if (!record) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(record);
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  const formData = await req.formData();

  const title = formData.get('title')?.toString() || '';
  const typeId = Number(formData.get('typeId'));
  const price = Number(formData.get('price'));
  const area = Number(formData.get('area'));
  const duration = formData.get('duration')?.toString() || '';
  const rooms = Number(formData.get('rooms'));
  const workList = formData.getAll('workList').map(item => item.toString());
  const existingPhotos = formData.getAll('existingPhotos').map(p => p.toString());
  const newPhotoFiles = formData.getAll('photos') as File[];

  const uploadedUrls: string[] = [];
  for (const file of newPhotoFiles) {
    if (file instanceof File && file.size > 0) {
      const url = await uploadToS3(file);
      uploadedUrls.push(url);
    }
  }

  const finalPhotos = [...existingPhotos, ...uploadedUrls];

  try {
    const updated = await prisma.repair.update({
      where: { id },
      data: {
        title,
        typeId,
        price,
        area,
        duration,
        rooms,
        workList,
        photos: finalPhotos,
      },
    });
    return NextResponse.json(updated);
  } catch (e) {
    console.error('UPDATE ERROR:', e);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  try {
    await prisma.repair.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
