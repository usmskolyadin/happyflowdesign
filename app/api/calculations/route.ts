import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const modelName = "calculation"; // строго для этого route.ts
const prismaModel = prisma[modelName];

const includeRelations = {
  calculation: { calculations: { include: { factor: true } } },
};

const validSortFields = {
  calculation: ["id", "area", "basePrice", "totalPrice", "notes", "createdBy", "createdAt", "updatedAt"],
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const rawFilter = searchParams.get("filter");
    const rawRange = searchParams.get("range");
    const rawSort = searchParams.get("sort");

    let filter = {};
    if (rawFilter) {
      try {
        filter = JSON.parse(rawFilter);
      } catch {
        return NextResponse.json({ error: "Invalid filter JSON" }, { status: 400 });
      }
    }

    let range = [0, 9];
    if (rawRange) {
      try {
        range = JSON.parse(rawRange);
        if (!Array.isArray(range) || range.length !== 2) throw new Error();
      } catch {
        return NextResponse.json({ error: "Invalid range JSON" }, { status: 400 });
      }
    }

    let sort: [string, string] = ["id", "asc"];
    if (rawSort) {
      try {
        sort = JSON.parse(rawSort);
      } catch {
        return NextResponse.json({ error: "Invalid sort JSON" }, { status: 400 });
      }
    }

    const [sortFieldRaw, sortOrderRaw] = sort;
    const sortField = validSortFields[modelName].includes(sortFieldRaw) ? sortFieldRaw : "id";
    const sortOrder = sortOrderRaw?.toLowerCase() === "desc" ? "desc" : "asc";

    const total = await prismaModel.count({ where: filter });
    const list = await prisma.calculation.findMany({
      where: filter,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sortField]: sortOrder },
      include: {
        factors: {
          include: {
            factor: true,
          },
        },
      },
    });


    const res = NextResponse.json(list);
    res.headers.set("Content-Range", `calculations ${range[0]}-${range[1]}/${total}`);
    return res;
  } catch (error) {
    console.error("Error in GET:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const created = await prismaModel.create({ data });
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Error in POST:", error);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
