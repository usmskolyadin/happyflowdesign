import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range");
  const sort = searchParams.get("sort");
  const [start = 0, end = 9] = range ? JSON.parse(range) : [0, 9];
  const [field = "id", order = "asc"] = sort ? JSON.parse(sort) : ["id", "asc"];

  const total = await prisma.pricing.count();
  const data = await prisma.pricing.findMany({
    skip: start,
    take: end - start + 1,
    orderBy: {
      [field]: order.toLowerCase() as "asc" | "desc",
    },
  });

  const response = NextResponse.json(data);

  response.headers.set("X-Total-Count", total.toString());
  response.headers.set("Access-Control-Expose-Headers", "X-Total-Count");

  return response;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const created = await prisma.pricing.create({ data: body });
  return NextResponse.json(created, { status: 201 });
}
