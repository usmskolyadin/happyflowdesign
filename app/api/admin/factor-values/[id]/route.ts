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
    const factorValue = await prisma.factorValue.update({
      where: { id },
      data: {     
        calculationId: data.calculationId,
        factorId: data.factorId,
        isApplied: data.isApplied,
      },
    });
    return NextResponse.json(factorValue);
  } catch {
    return new NextResponse("Failed to update factor value", { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  try {
    await prisma.factorValue.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse("Failed to delete factor value", { status: 500 });
  }
}
