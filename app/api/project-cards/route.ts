import { prisma } from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rawFilter = searchParams.get('filter');
  const rawRange = searchParams.get('range');
  const rawSort = searchParams.get('sort');

  let filter: Record<string, any> = {};
  if (rawFilter) {
    try {
      filter = JSON.parse(rawFilter);
    } catch {
      return NextResponse.json({ error: 'Invalid filter' }, { status: 400 });
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

  let sort: [string, 'asc' | 'desc'] = ['order', 'asc'];
  if (rawSort) {
    try {
      const parsed = JSON.parse(rawSort);
      if (Array.isArray(parsed) && parsed.length === 2) {
        sort = [parsed[0], parsed[1].toLowerCase() === 'desc' ? 'desc' : 'asc'];
      }
    } catch {
      return NextResponse.json({ error: 'Invalid sort' }, { status: 400 });
    }
  }

  try {
    const total = await prisma.projectCard.count({ where: filter });
    const data = await prisma.projectCard.findMany({
      where: filter,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sort[0]]: sort[1] },
    });

    const res = NextResponse.json(data);
    res.headers.set('X-Total-Count', total.toString());
    res.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawData = await req.json();

    const cleanPros = Array.isArray(rawData.pros)
      ? rawData.pros
          .map((item: any) => (typeof item === "string" ? item : item?.[0]))
          .filter((item: any) => typeof item === "string")
      : [];

    const cleanCons = Array.isArray(rawData.cons)
      ? rawData.cons
          .map((item: any) => (typeof item === "string" ? item : item?.[0]))
          .filter((item: any) => typeof item === "string")
      : [];

    const created = await prisma.projectCard.create({
      data: {
        title: rawData.title,
        price: rawData.price,
        description: rawData.description,
        isFeatured: rawData.isFeatured ?? false,
        pros: cleanPros,
        cons: cleanCons,
        order: rawData.order ?? 0,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Creation failed" }, { status: 500 });
  }
}
