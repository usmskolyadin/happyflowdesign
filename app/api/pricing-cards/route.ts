import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rangeParam = searchParams.get('range');
  const sortParam = searchParams.get('sort');
  const [start = 0, end = 9] = rangeParam ? JSON.parse(rangeParam) : [0, 9];
  const [field = 'order', orderDir = 'asc'] = sortParam ? JSON.parse(sortParam) : ['order', 'asc'];

  const total = await prisma.pricingCard.count();
  const data = await prisma.pricingCard.findMany({
    skip: start,
    take: end - start + 1,
    orderBy: {
      [field]: orderDir.toLowerCase() as 'asc' | 'desc',
    },
  });

  const res = NextResponse.json(data);
  res.headers.set('X-Total-Count', total.toString());
  res.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
  return res;
}

export async function POST(req: NextRequest) {
  const d = await req.json();
  const created = await prisma.pricingCard.create({
    data: {
      title: d.title,
      description: d.description,
      image: d.image,
      duration: d.duration,
      price: d.price,
      features: d.features,
      order: d.order || 0,
    },
  });
  return NextResponse.json(created, { status: 201 });
}