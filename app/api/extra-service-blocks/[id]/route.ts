import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import path from 'path';
import { writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '@/app/lib/s3';

const saveFile = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${uuidv4()}.${file.name.split('.').pop()}`;
  const filePath = path.join(process.cwd(), 'public', fileName);
  await writeFile(filePath, buffer);
  return `/${fileName}`;
};

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  const block = await prisma.extraServiceBlock.findUnique({ where: { id } });
  return block ? NextResponse.json(block) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    const formData = await req.formData();

    const title = formData.get('title')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const footerText = formData.get('footerText')?.toString() || '';
    const existingImageUrl = formData.get('existingImageUrl')?.toString() || '';
    const existingFileUrl = formData.get('existingFileUrl')?.toString() || '';
    const image = formData.get('image') as File | null;
    const file = formData.get('file') as File | null;
    const listItemsRaw = formData.getAll('listItems').map(item => item.toString());

    let imageUrl = existingImageUrl;
    let fileUrl = existingFileUrl;

    if (image && image.size > 0) {
      imageUrl = await uploadToS3(image);
    }

    if (file && file.size > 0) {
      fileUrl = await uploadToS3(file);
    }

    const updated = await prisma.extraServiceBlock.update({
      where: { id: id },
      data: {
        title,
        description,
        footerText,
        imageUrl,
        fileUrl,
        listItems: listItemsRaw,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error in PUT:', error);
    return NextResponse.json(
      { error: 'Failed to update record' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  await prisma.extraServiceBlock.delete({ where: { id } });
  return new Response(null, { status: 204 });
}
