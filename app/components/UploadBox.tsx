"use client";

import { ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface UploadBoxProps {
  text: string;
  onTextChange: (value: string) => void;
  file: File | null;
  onFileChange: (file: File | null) => void;
}

export function UploadBox({ text, onTextChange, file, onFileChange }: UploadBoxProps) {
  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    onFileChange(f);
  }

  return (
    <div className="space-y-6">

      {/* TEXT INPUT */}
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Text eingeben..."
        className={cn(
          "w-full h-32 p-4 rounded-xl resize-none",
          "bg-[#0f0f0f] border border-white/10 text-white",
          "placeholder-white/30",
          "focus:outline-none focus:border-cyan-400/40",
          "transition-all duration-300"
        )}
      />

      {/* FILE UPLOAD */}
      <label
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-40 rounded-xl cursor-pointer",
          "bg-[#0f0f0f] border border-white/10",
          "hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]",
          "transition-all duration-300"
        )}
      >
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-xl border border-cyan-400/20 blur-[2px]"></div>
          <div className="absolute inset-0 rounded-xl border border-cyan-400/40 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Icon */}
        <Upload className="w-10 h-10 text-cyan-300 mb-3 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]" />

        {/* Text */}
        <span className="text-white/70 text-sm">
          {file ? file.name : "Datei hochladen oder hier ablegen"}
        </span>

        <input type="file" className="hidden" onChange={handleFile} />
      </label>
    </div>
  );
}
