import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';

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
  return res;
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const created = await prisma.extraServiceBlock.create({ data });
  return NextResponse.json(created, { status: 201 });
}
