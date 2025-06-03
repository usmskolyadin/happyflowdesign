import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const factorValues = await prisma.factorValue.findMany({
    orderBy: { id: "desc" },
    include: { factor: true, calculation: true },
  });
  return NextResponse.json({ factorValues });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") return new NextResponse("Unauthorized", { status: 401 });

  const data = await request.json();

  try {
    const factorValue = await prisma.factorValue.create({
      data: {
        calculationId: data.calculationId,
        factorId: data.factorId,
        isApplied: data.isApplied ?? true,
      },
    });
    return NextResponse.json(factorValue);
  } catch {
    return new NextResponse("Failed to create factor value", { status: 500 });
  }
}
