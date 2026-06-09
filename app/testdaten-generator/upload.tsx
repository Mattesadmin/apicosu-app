"use client";

import { useState } from "react";
import Link from "next/link";

export default function TestdataGeneratorUpload() {
  const [file, setFile] = useState<File | null>(null);

  function handleFile(e: any) {
    setFile(e.target.files[0]);
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
          Upload Data Template
        </h1>

        <div style={{
          width: "600px",
          height: "200px",
          border: "2px dashed #999",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          background: "#fafafa"
        }}>
          <input type="file" onChange={handleFile} />
        </div>

        <Link href="/testdata-generator/result">
          <button style={{
            padding: "14px 28px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            opacity: file ? 1 : 0.5
          }}>
            Generate Test Data
          </button>
        </Link>

      </div>
    </div>
  );
}
