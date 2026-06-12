import { NextRequest, NextResponse } from "next/server";
import { analyzeWithAI } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const { text, fileName, fileBase64 } = await req.json();

    if (!text && !fileBase64) {
      return NextResponse.json(
        { error: "Bitte Text oder Datei übergeben." },
        { status: 400 }
      );
    }

    let finalInput = "";

    if (text) {
      finalInput += `TRAININGSTHEMA:\n${text}\n\n`;
    }

    if (fileBase64) {
      finalInput += `DATEI (${fileName}):\nBase64-Daten empfangen.\n\n`;
    }

    const result = await analyzeWithAI(finalInput);

    return NextResponse.json(
      { output: result.output },
      { status: 200 }
    );
  } catch (err) {
    console.error("Training Generator API Fehler:", err);
    return NextResponse.json(
      { error: "Interner Fehler in der Training Generator API." },
      { status: 500 }
    );
  }
}


