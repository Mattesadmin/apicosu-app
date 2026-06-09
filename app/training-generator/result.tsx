"use client";

import { useState } from "react";

export default function TrainingGeneratorResult() {
  const [result] = useState(`
Training Document
-----------------
Process: Sales Order Creation
Level: Beginner

1. Introduction
- Purpose of the training
- Overview of the sales order process

2. Step-by-Step Instructions
Step 1: Open transaction VA01
Step 2: Enter order type "OR"
Step 3: Enter sales area
Step 4: Enter customer number
Step 5: Add material positions
Step 6: Save the order

3. Exercises
Exercise 1:
- Create a sales order with customer 100000
- Add material MAT-1001 with quantity 10

Exercise 2:
- Create a sales order requiring approval workflow

4. Tips & Notes
- Ensure customer master data is complete
- Check material availability before saving
  `.trim());

  function copyText() {
    navigator.clipboard.writeText(result);
  }

  function downloadText() {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "training.txt";
    a.click();

    URL.revokeObjectURL(url);
  }

  function exportPDF() {
    alert("PDF export will be added in the final UI version.");
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
          Generated Training Material
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

          <button onClick={exportPDF} style={{
            padding: "10px 20px",
            background: "#444",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Export PDF
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
