"use client";

import { useState } from "react";

export default function ResultBox({ result }: { result: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "result.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="panel">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Ergebnis</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn" onClick={handleCopy}>
            {copied ? "Kopiert" : "Copy"}
          </button>

          <button className="btn" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: "16px" }}>
        {result || "Noch kein Ergebnis"}
      </pre>
    </div>
  );
}
