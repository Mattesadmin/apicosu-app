import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
}: ModuleCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-2xl p-6 backdrop-blur-xl",
        "bg-white/10 dark:bg-white/5",
        "border border-white/20 dark:border-white/10",
        "shadow-[0_0_20px_rgba(0,255,255,0.15)]",
        "hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:scale-[1.02]"
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30">
          <Icon className="w-8 h-8 text-cyan-300" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-cyan-300 group-hover:gap-3 transition-all">
        <span>Öffnen</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
