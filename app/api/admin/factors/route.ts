import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const factors = await prisma.factor.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json({ factors });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  const data = await request.json();

  try {
    const factor = await prisma.factor.create({
      data: {
        name: data.name,
        description: data.description,
        value: data.value,
        isPositive: data.isPositive,
        isActive: data.isActive ?? true,
        category: data.category,
      },
    });
    return NextResponse.json(factor);
  } catch {
    return new NextResponse("Failed to create factor", { status: 500 });
  }
}
