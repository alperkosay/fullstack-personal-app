import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";


export async function GET(req: NextRequest) {
  const data = await prisma.sectionData.findMany();
  console.log("data", data);

  prisma.$disconnect();
  return NextResponse.json(data);
}
