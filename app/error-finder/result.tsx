"use client";

import { useState } from "react";

export default function ErrorFinderResult() {
  const [result] = useState(`
Error at line 42: Missing field XYZ
Impact: Medium
Suggested Fix: Add field XYZ to configuration
  `.trim());

  function copyText() {
    navigator.clipboard.writeText(result);
  }

  function downloadText() {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "error-analysis.txt";
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "40px 0"
    }}>
      <div style={{ width: "1400px" }}>

        <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "20px" }}>
          Analysis Result
        </h1>

        {/* Button Row */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <button onClick={copyText} style={{
            padding: "10px 20px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Copy
          </button>

          <button onClick={downloadText} style={{
            padding: "10px 20px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Download
          </button>
        </div>

        {/* Result Box */}
        <pre style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "12px",
          fontSize: "16px",
          whiteSpace: "pre-wrap",
          border: "1px solid #ddd"
        }}>
          {result}
        </pre>

      </div>
    </div>
  );
}

