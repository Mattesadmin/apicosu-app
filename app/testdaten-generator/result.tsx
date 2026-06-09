"use client";

import { useState } from "react";

export default function TestdataGeneratorResult() {
  const [result] = useState(`
Generated Test Data
-------------------

Customer_ID | Name           | Country | Credit_Limit
-----------------------------------------------------
100001      | Müller GmbH    | DE      | 50000
100002      | TechNova AG    | DE      | 75000
100003      | Alpina SA      | CH      | 62000
100004      | FutureCorp BV  | NL      | 54000

Material_ID | Description           | Plant | Stock
---------------------------------------------------
MAT-1001    | Steel Bolt M10        | 1000  | 4500
MAT-1002    | Plastic Housing Type A| 1000  | 1200
MAT-1003    | Copper Cable 5m       | 2000  | 800
  `.trim());

  function copyText() {
    navigator.clipboard.writeText(result);
  }

  function downloadText() {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "testdata.txt";
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
          Generated Test Data
        </h1>

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
