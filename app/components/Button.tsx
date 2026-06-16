"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-5 py-2.5 rounded-lg font-medium text-white
        bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]
        border border-white/10
        shadow-[0_0_20px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_0_35px_rgba(0,0,0,0.6)]
        hover:border-white/20
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {/* Glow Layer */}
      <span
        className="
          absolute inset-0 rounded-lg opacity-0 
          group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20
          blur-xl
        "
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
