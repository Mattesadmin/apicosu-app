"use client";

import { useState } from "react";
import { UploadBox } from "@/app/components/UploadBox";
import ResultBox from "@/app/components/ResultBox";

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
    <div className="max-w-[900px] mx-auto py-20 px-6 space-y-16">

      {/* HEADER */}
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          {short} – {title}
        </h1>
        <p className="text-white/50 text-lg max-w-[700px] mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* MAIN CARD */}
      <div
        className="
          p-10 rounded-3xl
          bg-[#0f0f0f] border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_0_60px_rgba(0,0,0,0.8)]
        "
      >
        <div className="space-y-10">

          {/* UPLOAD BOX */}
          <UploadBox
            text={text}
            onTextChange={setText}
            file={file}
            onFileChange={setFile}
          />

          {/* BUTTON */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50"
            >
             {loading ? "Generiere..." : "Blueprint erzeugen"}
            </button>
          </div>
        </div>
      </div>

      {/* RESULT */}
      {result && (
        <ResultBox result={result} />
      )}
    </div>
  );
}
