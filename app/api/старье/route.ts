import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

const modelMap = {
  factors: "factor",
  calculations: "calculation",
  factorValues: "factorValue",
} as const;

type RouteModel = keyof typeof modelMap;
type ModelName = (typeof modelMap)[RouteModel];

function isValidModel(model: string): model is RouteModel {
  return model in modelMap;
}

const includeRelations: Record<ModelName, any> = {
  calculation: { factors: { include: { factor: true } } },
  factor: {},
  factorValue: { factor: true, calculation: true },
};

const emptyFilter = {};
const numericIdModels: ModelName[] = [
  "factor",
  "calculation",
  "factorValue",
];

export async function GET(req: NextRequest, context: { params: { model: string } }) {
  const { model } = context.params;

  if (!isValidModel(model)) {
    return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  }

  const modelName = modelMap[model];
  const prismaModel = (prisma as any)[modelName];

  const validSortFields: Record<ModelName, string[]> = {
    factor: ["id", "name", "description", "value", "isPositive", "isActive", "category"],
    calculation: ["id", "area", "basePrice", "totalPrice", "notes", "createdBy", "createdAt", "updatedAt"],
    factorValue: ["id", "factorId", "calculationId", "isApplied"],
  };

  try {
    const { searchParams } = new URL(req.url);

    const rawFilter = searchParams.get("filter");
    const rawRange = searchParams.get("range");
    const rawSort = searchParams.get("sort");

    console.log("RAW QUERY PARAMS:");
    console.log("filter:", rawFilter);
    console.log("range:", rawRange);
    console.log("sort:", rawSort);

    // Парсим filter
    let filter = emptyFilter;
    if (rawFilter) {
      try {
        filter = JSON.parse(rawFilter);
        if (typeof filter !== "object" || filter === null) {
          throw new Error("Filter is not an object");
        }
      } catch (e) {
        console.error("Filter parse error:", e);
        return NextResponse.json({ error: "Invalid filter JSON" }, { status: 400 });
      }
    }

    // Приводим id к числу, если нужно
    if (
      numericIdModels.includes(modelName) &&
      filter.id !== undefined &&
      typeof filter.id === "string"
    ) {
      const numId = Number(filter.id);
      if (!isNaN(numId)) filter.id = numId;
      else {
        console.warn(`Filter id is not a valid number: ${filter.id}`);
      }
    }

    // Парсим range
    let range = [0, 9];
    if (rawRange) {
      try {
        range = JSON.parse(rawRange);
        if (
          !Array.isArray(range) ||
          range.length !== 2 ||
          typeof range[0] !== "number" ||
          typeof range[1] !== "number"
        ) {
          throw new Error("Range must be an array of two numbers");
        }
      } catch (e) {
        console.error("Range parse error:", e);
        return NextResponse.json({ error: "Invalid range JSON" }, { status: 400 });
      }
    }

    // Парсим sort
    let sort: [string, string] = ["id", "asc"];
    if (rawSort) {
      try {
        sort = JSON.parse(rawSort);
        if (
          !Array.isArray(sort) ||
          sort.length !== 2 ||
          typeof sort[0] !== "string" ||
          typeof sort[1] !== "string"
        ) {
          throw new Error("Sort must be an array of two strings");
        }
      } catch (e) {
        console.error("Sort parse error:", e);
        return NextResponse.json({ error: "Invalid sort JSON" }, { status: 400 });
      }
    }

    let [sortField, sortOrderRaw] = sort;
    const sortOrder = sortOrderRaw.toLowerCase() === "asc" ? "asc" : "desc";

    if (!validSortFields[modelName].includes(sortField)) {
      console.warn(`Invalid sort field "${sortField}" for model "${modelName}", fallback to "id"`);
      sortField = "id";
    }

    const where = Object.keys(filter).length === 0 ? undefined : filter;

    console.log("Parsed params:");
    console.log("filter (where):", where);
    console.log("range:", range);
    console.log("sortField:", sortField);
    console.log("sortOrder:", sortOrder);

    const total = await prismaModel.count({ where });

    const list = await prismaModel.findMany({
      where,
      skip: range[0],
      take: range[1] - range[0] + 1,
      orderBy: { [sortField]: sortOrder },
      include: includeRelations[modelName],
    });

    const res = NextResponse.json(list);
    res.headers.set("Content-Range", `${model} ${range[0]}-${range[1]}/${total}`);

    return res;
  } catch (error) {
    console.error("Unhandled error in GET handler:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: { model: string } }) {
  const { model } = params;
  if (!isValidModel(model)) {
    return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  }

  const modelName = modelMap[model];
  const prismaModel = (prisma as any)[modelName];

  try {
    const data = await req.json();
    const created = await prismaModel.create({ data });
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
