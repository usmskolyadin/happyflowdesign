import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const modelMap = {
  users: "user",
  factors: "factor",
  calculations: "calculation",
  factorValues: "factorValue",
  accounts: "account",
  sessions: "session",
  verificationTokens: "verificationToken",
} as const;

function isValidModel(model: string): model is keyof typeof modelMap {
  return model in modelMap;
}

const includeRelations = {
  calculation: { factors: { include: { factor: true } } },
  factor: {},
  factorValue: { factor: true, calculation: true },
  user: { accounts: true, sessions: true },
  account: { user: true },
  session: { user: true },
  verificationToken: {},
};

export async function GET(req: NextRequest, context: { params: Promise<{ model: string; id: string }> }) {
  const params = await context.params;
  const { model, id } = params;

  
  if (!isValidModel(model)) {
    return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  }

  const prismaModel = (prisma as any)[modelMap[model]];

  try {
    const item = await prismaModel.findUnique({
      where: { id },
      include: includeRelations[modelMap[model]],
    });
    if (!item) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (e) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: Promise<{ model: string; id: string }> }) {
  const params = await context.params;
  const { model, id } = params;

  if (!isValidModel(model)) {
    return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  }

  const prismaModel = (prisma as any)[modelMap[model]];

  try {
    const data = await req.json();
    const updated = await prismaModel.update({
      where: { id },
      data,
    });
    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ model: string; id: string }> }) {
  const params = await context.params;
  const { model, id } = params;

  if (!isValidModel(model)) {
    return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  }

  const prismaModel = (prisma as any)[modelMap[model]];

  try {
    await prismaModel.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (e) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
