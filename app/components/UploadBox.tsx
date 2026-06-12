"use client";

import { useState, useRef } from "react";

export function UploadBox({
  text,
  onTextChange,
  file,
  onFileChange,
  placeholder = "Text eingeben oder Datei hochladen..."
}: {
  text: string;
  onTextChange: (value: string) => void;

  file: File | null;
  onFileChange: (file: File | null) => void;

  placeholder?: string;
}) {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const f = e.dataTransfer.files?.[0];
    if (f) onFileChange(f);
  };

  return (
    <div className="space-y-4">
      {/* TEXTFELD */}
      <textarea
        className="w-full h-40 p-4 rounded bg-[#161b22] border border-white/10 text-white"
        placeholder={placeholder}
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />

      {/* DATEI-UPLOAD */}
      <div
        className={`upload-box ${dragOver ? "dragover" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <p>Datei hierher ziehen oder klicken</p>

        {file && (
          <p className="text-xs text-gray-400 mt-2">
            Ausgewählt: <strong>{file.name}</strong>
          </p>
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFileChange(f);
          }}
        />
      </div>
    </div>
  );
}
