import { prisma } from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

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

  // ✅ Нормализуем filter для prisma
  const prismaFilter: Record<string, any> = {};
  for (const [key, value] of Object.entries(filter)) {
    if (Array.isArray(value)) {
      prismaFilter[key] = { in: value };
    } else {
      prismaFilter[key] = value;
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
      sort = [parsed[0], parsed[1].toLowerCase() === 'desc' ? 'desc' : 'asc'];
    } catch {
      return NextResponse.json({ error: 'Invalid sort' }, { status: 400 });
    }
  }

  try {
    const total = await prisma.repairType.count({ where: prismaFilter });

    const data = await prisma.repairType.findMany({
      where: prismaFilter,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sort[0]]: sort[1] },
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
  const body = await req.json();
  const created = await prisma.repairType.create({ data: body });
  return NextResponse.json(created, { status: 201 });
}
