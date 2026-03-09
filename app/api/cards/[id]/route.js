import { getCardById } from "@/data/cards";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const card = getCardById(params.id);
  if (!card) {
    return NextResponse.json({ error: "Card not found" }, { status: 404 });
  }
  return NextResponse.json(card);
}
