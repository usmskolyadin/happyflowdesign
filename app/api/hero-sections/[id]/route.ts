import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const saveImage = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${uuidv4()}.${file.name.split(".").pop()}`;
  const filePath = path.join(process.cwd(), "public", fileName);
  await writeFile(filePath, buffer);
  return `/${fileName}`;
};

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numId = parseInt(id, 10);
  if (isNaN(numId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
  const item = await prisma.heroSection.findUnique({ where: { id: numId } });
  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(item);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numId = parseInt(id, 10);

  const formData = await req.formData();
  let imageUrl = (formData.get("existingImageUrl") as string) ?? "";
  const image = formData.get("image") as File | null;

  if (image) {
    imageUrl = await saveImage(image);
  }

  const title = formData.get("title") as string;
  const subtitle = formData.get("subtitle") as string;
  const buttonText = formData.get("buttonText") as string;

  try {
    const updated = await prisma.heroSection.update({
      where: { id: numId },
      data: { title, subtitle, buttonText, imageUrl },
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numId = parseInt(id, 10);

  try {
    await prisma.heroSection.delete({ where: { id: numId } });
    return new Response(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
