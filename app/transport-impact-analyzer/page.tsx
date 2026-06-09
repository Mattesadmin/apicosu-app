"use client";

import React, { useState } from "react";

export default function TransportImpactAnalyzerPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setError(null);
    setOutput(null);
    setModel(null);

    if (!text.trim()) {
      setError("Bitte Transportdaten, Objekte oder Hinweise eingeben.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/transport-impact-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Fehler bei der Analyse.");
      } else {
        const data = await res.json();
        setModel(data.model || null);
        setOutput(data.output || null);
      }
    } catch (e) {
      setError("Die Anfrage konnte nicht gesendet werden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-[1400px] px-6 py-10">
      <h1 className="text-3xl font-semibold mb-4">Transport Impact Analyzer</h1>
      <p className="text-sm text-gray-500 mb-6">
        Analysiere Transporte, Objekte, Abhängigkeiten, Risiken und SPDD/SPAU-Hinweise.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Eingabe */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Eingabetext</label>
          <textarea
            className="border rounded-md p-3 min-h-[260px] text-sm font-mono"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="z.B. Transportlog, Objektliste, SPDD/SPAU-Hinweise..."
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {loading ? "Analysiere..." : "Analyse starten"}
          </button>
          {error && (
            <p className="mt-3 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        {/* Ausgabe */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium">Analyseergebnis</h2>
            {model && (
              <span className="text-xs text-gray-500">
                Modell: {model}
              </span>
            )}
          </div>
          <div className="border rounded-md p-3 min-h-[260px] text-sm whitespace-pre-wrap bg-gray-50">
            {loading && "Die KI analysiert deinen Transport..."}
            {!loading && output && output}
            {!loading && !output && !error && (
              <span className="text-gray-400">
                Noch keine Analyse durchgeführt.
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
