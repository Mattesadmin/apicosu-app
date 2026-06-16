"use client";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useState } from "react";

interface ResultBoxProps {
  result: any;
  loading?: boolean;
  error?: string | null;
  emptyLabel?: string;
}

export default function ResultBox({
  result,
  loading,
  error,
  emptyLabel = "Noch keine Analyse durchgeführt."
}: ResultBoxProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className={cn(
        "relative p-6 rounded-2xl",
        "bg-[#0f0f0f] border border-white/10",
        "shadow-[0_0_25px_rgba(0,0,0,0.5)]",
        "transition-all duration-300"
      )}
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 blur-[2px]"></div>
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/40 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Ergebnis</h2>

        {/* Copy Button */}
        {result && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-white/60 hover:text-white transition"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Kopiert" : "Kopieren"}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="max-h-[400px] overflow-auto rounded-xl bg-black/20 p-4 border border-white/5">
        {loading && (
          <p className="text-white/50 text-sm">Analysiere…</p>
        )}

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        {!loading && !error && !result && (
          <p className="text-white/40 text-sm">{emptyLabel}</p>
        )}

        {result && (
          <pre className="text-white/80 whitespace-pre-wrap text-sm leading-relaxed">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
