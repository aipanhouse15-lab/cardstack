import { CARDS } from "@/data/cards";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ cards: CARDS, total: CARDS.length });
}
