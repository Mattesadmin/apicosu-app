import { NextRequest, NextResponse } from "next/server";
import { analyzeWithAI } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const text: string | undefined = body?.text;
    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Kein Text für die Analyse übergeben." },
        { status: 400 }
      );
    }

    const result = await analyzeWithAI(text);

    return NextResponse.json(
      {
        model: result.model,
        const cleanOutput = result.output
          .replace(/\\n/g, "\n")
          .replace(/\r\n/g, "\n");

    return NextResponse.json(
      {
        model: result.model,
        output: cleanOutput,
      },
      { status: 200 }
);
  } catch (error) {
    console.error("Error-Finder API Fehler:", error);
    return NextResponse.json(
      { error: "Interner Fehler in der Error-Finder-API." },
      { status: 500 }
    );
  }
}
