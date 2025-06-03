import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface UserCreatePayload {
  name?: string;
  email: string;
  role: "USER" | "ADMIN";
}

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body: UserCreatePayload = await request.json();
  const { name, email, role } = body;

  if (!email || !role) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  try {
    const newUser = await prisma.user.create({
      data: { name, email, role },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return new NextResponse("Failed to create user", { status: 500 });
  }
}
