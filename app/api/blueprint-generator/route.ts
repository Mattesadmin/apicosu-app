import { NextRequest, NextResponse } from "next/server";
import { analyzeWithAI } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const text: string | undefined = body?.text;
    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Kein Text für die Blueprint-Erstellung übergeben." },
        { status: 400 }
      );
    }

    const result = await analyzeWithAI(text);

    return NextResponse.json(
      {
        model: result.model,
        output: result.output,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Blueprint Generator API Fehler:", error);
    return NextResponse.json(
      { error: "Interner Fehler in der Blueprint-Generator-API." },
      { status: 500 }
    );
  }
}
