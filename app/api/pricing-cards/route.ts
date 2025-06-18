import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma';
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";


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
  const formData = await req.formData();
  const image = formData.get("image") as File;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const duration = formData.get("duration") as string;
  const price = formData.get("price") as string;
  const order = parseInt(formData.get("order") as string) || 0;

  const featuresRaw = [...formData.entries()]
    .filter(([key]) => key.startsWith("features"))
    .map(([_, value]) => value.toString());

  let imageUrl = "";
  if (image && typeof image.name === 'string' && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${uuidv4()}.${image.name.split(".").pop()}`;
    const filePath = path.join(process.cwd(), "public", fileName);
    await writeFile(filePath, buffer);
    imageUrl = `/${fileName}`;
  }

  const created = await prisma.pricingCard.create({
    data: {
      title,
      description,
      duration,
      price,
      order,
      features: featuresRaw,
      image: imageUrl,
    },
  });

  return NextResponse.json(created, { status: 201 });
}