import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { uploadToS3 } from "@/app/lib/s3";

const saveImage = async (file: File) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${uuidv4()}.${file.name.split(".").pop()}`;
  const filePath = path.join(process.cwd(), "public", fileName);
  await writeFile(filePath, buffer);
  return `/${fileName}`;
};

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numId = parseInt(id, 10);

  if (isNaN(numId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  const card = await prisma.pricingCard.findUnique({ where: { id: numId } });
  if (!card) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(card);
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    const id = Number(params.id);
    const formData = await req.formData();

    const image = formData.get("image") as File | null;
    let imageUrl = formData.get("existingImageUrl")?.toString() || "";

    if (image && typeof image.name === "string" && image.size > 0) {
      try {
        imageUrl = await uploadToS3(image);
      } catch (error) {
        console.error('S3 upload error:', error);
        return NextResponse.json(
          { error: "Failed to upload image to S3" },
          { status: 500 }
        );
      }
    }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const duration = formData.get("duration") as string;
    const price = formData.get("price") as string;
    const order = parseInt(formData.get("order") as string) || 0;

    const featuresRaw = [...formData.entries()]
      .filter(([key]) => key.startsWith("features"))
      .map(([_, value]) => value.toString());

    const updated = await prisma.pricingCard.update({
      where: { id },
      data: {
        title,
        description,
        duration,
        price,
        image: imageUrl,
        order,
        features: featuresRaw,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error in PUT handler:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numId = parseInt(id, 10);

  await prisma.pricingCard.delete({ where: { id: numId } });
  return new Response(null, { status: 204 });
}