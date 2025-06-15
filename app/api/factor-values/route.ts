// app/api/calculations/route.ts
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rawFilter = searchParams.get("filter");
  const rawRange = searchParams.get("range");
  const rawSort = searchParams.get("sort");

  let filter = {};
  if (rawFilter) {
    try {
      filter = JSON.parse(rawFilter);
    } catch {
      return NextResponse.json({ error: "Invalid filter" }, { status: 400 });
    }
  }

  let range: [number, number] = [0, 9];
  if (rawRange) {
    try {
      range = JSON.parse(rawRange);
    } catch {
      return NextResponse.json({ error: "Invalid range" }, { status: 400 });
    }
  }

  let sort: [string, "asc" | "desc"] = ["id", "asc"];
  if (rawSort) {
    try {
      const parsed = JSON.parse(rawSort);
      if (Array.isArray(parsed) && parsed.length === 2) {
        sort = [parsed[0], parsed[1].toLowerCase() === "desc" ? "desc" : "asc"];
      }
    } catch {
      return NextResponse.json({ error: "Invalid sort" }, { status: 400 });
    }
  }

  try {
    const total = await prisma.calculation.count({ where: filter });
    const list = await prisma.calculation.findMany({
      where: filter,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sort[0]]: sort[1] },
    });

    const res = NextResponse.json(list);
    res.headers.set("Content-Range", `calculations ${range[0]}-${range[1]}/${total}`);
    return res;
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const created = await prisma.calculation.create({ data });
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Creation failed" }, { status: 500 });
  }
}
