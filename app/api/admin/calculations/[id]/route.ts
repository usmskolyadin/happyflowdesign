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
    const calculation = await prisma.calculation.update({
      where: { id },
      data: {
        area: data.area,
        basePrice: data.basePrice,
        totalPrice: data.totalPrice,
        notes: data.notes,
      },
    });
    return NextResponse.json(calculation);
  } catch {
    return new NextResponse("Failed to update calculation", { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  try {
    await prisma.calculation.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse("Failed to delete calculation", { status: 500 });
  }
}
