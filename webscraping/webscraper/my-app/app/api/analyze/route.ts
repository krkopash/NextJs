import { NextResponse } from "next/server";
import { analyzeWebsite } from "@/lib/analyzer";

export async function POST(req: Request) {
  const { url } = await req.json();
  try {
    const result = await analyzeWebsite(url);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({error: "Failed to analyze website" },);
  }
}