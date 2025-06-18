import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import path from 'path';
import { writeFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const saveFile = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${uuidv4()}.${file.name.split('.').pop()}`;
  const filePath = path.join(process.cwd(), 'public', fileName);
  await writeFile(filePath, buffer);
  return `/${fileName}`;
};

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const block = await prisma.extraServiceBlock.findUnique({ where: { id } });
  return block ? NextResponse.json(block) : NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const formData = await req.formData();

  const title = formData.get('title')?.toString() || '';
  const description = formData.get('description')?.toString() || '';
  const footerText = formData.get('footerText')?.toString() || '';
  const existingImageUrl = formData.get('existingImageUrl')?.toString() || '';
  const existingFileUrl = formData.get('existingFileUrl')?.toString() || '';
  const image = formData.get('image') as File | null;
  const file = formData.get('file') as File | null;

  const imageUrl = image && image.size > 0 ? await saveFile(image) : existingImageUrl;
  const fileUrl = file && file.size > 0 ? await saveFile(file) : existingFileUrl;

  const listItemsRaw = formData.getAll('listItems').map(item => item.toString());

  const updated = await prisma.extraServiceBlock.update({
    where: { id },
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
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  await prisma.extraServiceBlock.delete({ where: { id } });
  return new Response(null, { status: 204 });
}
