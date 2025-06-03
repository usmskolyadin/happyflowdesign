import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  const id = params.id;
  const data = await request.json();

  try {
    const factor = await prisma.factor.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        value: data.value,
        isPositive: data.isPositive,
        isActive: data.isActive,
        category: data.category,
      },
    });
    return NextResponse.json(factor);
  } catch {
    return new NextResponse("Failed to update factor", { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  try {
    await prisma.factor.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse("Failed to delete factor", { status: 500 });
  }
}
