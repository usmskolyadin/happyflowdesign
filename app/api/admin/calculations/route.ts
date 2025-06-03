import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const calculations = await prisma.calculation.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      factors: { include: { factor: true } },
    },
  });
  return NextResponse.json({ calculations });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  const data = await request.json();

  try {
    const calculation = await prisma.calculation.create({
      data: {
        area: data.area,
        basePrice: data.basePrice ?? 1500,
        totalPrice: data.totalPrice,
        notes: data.notes,
        createdBy: session.user.email,
      },
    });
    return NextResponse.json(calculation);
  } catch {
    return new NextResponse("Failed to create calculation", { status: 500 });
  }
}
