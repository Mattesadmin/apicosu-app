"use client";

import { useState } from "react";

export default function BlueprintGeneratorResult() {
  const [result] = useState(`
Blueprint Summary
-----------------
Project: Sales Order Automation
Version: 1.0

1. Business Requirements
- Automate sales order creation
- Validate customer master data
- Trigger workflow for approvals

2. Functional Design
- BAPI: BAPI_SALESORDER_CREATEFROMDAT2
- Custom validation logic (ZCL_SD_VALIDATION)
- Workflow WS99900001

3. Technical Components
- ZSD_ORDER_CREATE (Report)
- ZSD_ORDER_API (Class)
- ZSD_ORDER_TABLE (Custom Table)

4. Test Cases
- TC01: Create order with valid data
- TC02: Missing customer master
- TC03: Workflow approval required
  `.trim());

  function copyText() {
    navigator.clipboard.writeText(result);
  }

  function downloadText() {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "blueprint.txt";
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
          Generated Blueprint
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
