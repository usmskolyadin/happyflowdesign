import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const saveImage = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${uuidv4()}.${file.name.split(".").pop()}`;
  const filePath = path.join(process.cwd(), "public", fileName);
  await writeFile(filePath, buffer);
  return `/` + fileName;
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range");
  const sort = searchParams.get("sort");
  const [start = 0, end = 9] = range ? JSON.parse(range) : [0, 9];
  const [field = "id", order = "asc"] = sort ? JSON.parse(sort) : ["id", "asc"];

  const total = await prisma.heroSection.count();
  const data = await prisma.heroSection.findMany({
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
  const formData = await req.formData();
  const image = formData.get("image") as File | null;

  let imageUrl = "";
  if (image) {
    imageUrl = await saveImage(image);
  }

  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const buttonText = formData.get("buttonText") as string;

  const created = await prisma.heroSection.create({
    data: {
      title,
      subtitle,
      buttonText,
      imageUrl,
    },
  });

  return NextResponse.json(created, { status: 201 });
}