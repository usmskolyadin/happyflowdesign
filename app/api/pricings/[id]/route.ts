import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const pricing = await prisma.pricing.findUnique({ where: { id } });
  if (!pricing) {
    return NextResponse.json({ error: 'Pricing not found' }, { status: 404 });
  }

  return NextResponse.json(pricing);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    await prisma.pricing.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete pricing' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const id = Number(params.id);
  const body = await req.json();

  try {
    const updated = await prisma.pricing.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update pricing' }, { status: 500 });
  }
}
