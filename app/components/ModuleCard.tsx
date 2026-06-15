"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}

export function ModuleCard({ title, description, icon, href }: ModuleCardProps) {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      href={href || ""}
      className="
        group
        relative
        block
        rounded-2xl
        p-6
        backdrop-blur-xl
        bg-white/5
        border border-cyan-500/20
        shadow-[0_0_20px_rgba(0,255,255,0.15)]
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
        hover:border-cyan-400/40
      "
      style={{
        perspective: "1000px",
      }}
    >
      {/* Glare */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-30
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-cyan-300/30
          to-transparent
        "
        style={{
          transform: "translateZ(40px)",
        }}
      />

      {/* Icon */}
      <div
        className="
          text-cyan-300
          mb-4
          transition-transform
          duration-300
          group-hover:scale-110
        "
        style={{
          transform: "translateZ(30px)",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          text-white
          text-xl
          font-semibold
          mb-2
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-gray-300
          text-sm
          leading-relaxed
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
        style={{
          transform: "translateZ(10px)",
        }}
      >
        {description}
      </p>
    </Wrapper>
  );
}

