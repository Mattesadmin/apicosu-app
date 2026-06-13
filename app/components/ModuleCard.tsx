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
        border border-[#2a2a2a]
        bg-[#111]
        p-6
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-xl
        hover:shadow-black/40
        hover:-translate-y-1
        hover:scale-[1.02]
        hover:border-[#444]
      "
      style={{
        perspective: "1000px",
      }}
    >
      {/* Glare / Shine Effekt */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-20
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-white/20
          to-transparent
        "
        style={{
          transform: "translateZ(40px)",
        }}
      />

      {/* Icon */}
      <div
        className="
          text-white
          text-4xl
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

