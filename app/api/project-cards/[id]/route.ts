import { prisma } from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);

  if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const card = await prisma.projectCard.findUnique({ where: { id } });
  if (!card) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json(card);
}

export async function PUT(
  req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  const data = await req.json();
  try {
    const updated = await prisma.projectCard.update({ where: { id }, data });
    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  try {
    await prisma.projectCard.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
