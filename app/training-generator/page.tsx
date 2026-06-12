"use client";

import { useState } from "react";
import { Button } from "@/app/components/Button";
import { UploadBox } from "@/app/components/UploadBox";
import { ResultBox } from "@/app/components/ResultBox";

export default function TrainingGeneratorPage() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setError(null);
    setResult("");

    if (!text.trim() && !file) {
      setError("Bitte Text oder Datei hochladen.");
      return;
    }

    setLoading(true);

    let fileBase64: string | null = null;
    let fileName: string | null = null;

    if (file) {
      const buffer = await file.arrayBuffer();
      fileBase64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
      fileName = file.name;
    }

    try {
      const res = await fetch("/api/training-generator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          fileName,
          fileBase64,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Fehler bei der Generierung.");
      } else {
        setResult(data.output || "");
      }
    } catch {
      setError("Die Anfrage konnte nicht gesendet werden.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">Training Generator</h1>

      <UploadBox
        text={text}
        onTextChange={setText}
        file={file}
        onFileChange={setFile}
        placeholder="Thema, Zielgruppe oder vorhandene Unterlagen..."
      />

      <Button onClick={generate} disabled={loading}>
        {loading ? "Generiere..." : "Training erzeugen"}
      </Button>

      <ResultBox
        result={result}
        loading={loading}
        error={error}
        emptyLabel="Noch kein Training erzeugt."
      />
    </div>
  );
}


