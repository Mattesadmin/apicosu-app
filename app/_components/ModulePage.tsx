"use client";

import { useState } from "react";
import { UploadBox } from "@/app/components/UploadBox";
import Button from "@/app/components/Button";

export default function ModulePage({
  short,
  title,
  description,
  endpoint
}: {
  short: string;
  title: string;
  description: string;
  endpoint: string;
}) {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleAnalyze() {
    setLoading(true);
    setResult(null);

    const res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        text,
        fileName: file?.name || null
      })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="max-w-[900px] mx-auto py-16 px-6 space-y-12">

      {/* HEADER */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          {short} – {title}
        </h1>
        <p className="text-white/60 text-lg">{description}</p>
      </div>

      {/* GLASS CARD */}
      <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl space-y-6">

        {/* UPLOAD BOX */}
        <UploadBox
          text={text}
          onTextChange={setText}
          file={file}
          onFileChange={setFile}
        />

        {/* ANALYZE BUTTON */}
        <div className="pt-4">
          <Button
            label={loading ? "Analysiere..." : "Analysieren"}
            onClick={handleAnalyze}
          />
        </div>
      </div>

      {/* RESULT BOX */}
      {result && (
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Ergebnis</h2>
          <pre className="text-white/80 whitespace-pre-wrap text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
