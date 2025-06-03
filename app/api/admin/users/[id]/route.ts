import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface UserUpdatePayload {
  name?: string;
  role: "USER" | "ADMIN";
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const id = params.id;
  if (!id) {
    return new NextResponse("Missing user id", { status: 400 });
  }

  const body: UserUpdatePayload = await request.json();
  const { name, role } = body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, role },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return new NextResponse("Failed to update user", { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const id = params.id;
  if (!id) {
    return new NextResponse("Missing user id", { status: 400 });
  }

  try {
    await prisma.user.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse("Failed to delete user", { status: 500 });
  }
}
