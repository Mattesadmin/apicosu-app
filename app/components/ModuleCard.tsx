import Link from "next/link";
import { cn } from "@/lib/utils";

const shortMap: Record<string, string> = {
  "Error Finder": "EF",
  "Customizing Analyzer": "CA",
  "Transport Impact Analyzer": "TIA",
  "Blueprint Generator": "BG",
  "Testdaten Generator": "TG",
  "Training Generator": "TRG"
};

export default function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
  className
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
  className?: string;
}) {
  const short = shortMap[title] || "";

  return (
    <Link
      href={href}
      className={cn(
        "group relative aspect-square rounded-3xl p-8 flex flex-col items-center justify-center text-center",
        // Hintergrund + Abhebung
        "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-cyan-400/30",
        "shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]",
        // Hover Effekt
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Kürzel */}
      <div className="text-6xl font-extrabold text-white tracking-tight mb-4">
        {short}
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-cyan-400" />
      </div>

      {/* Voller Name */}
      <h3 className="text-2xl font-semibold text-white mb-3">
        {title}
      </h3>

      {/* Beschreibung */}
      <p className="text-white/80 text-base leading-relaxed max-w-[90%]">
        {description}
      </p>
    </Link>
  );
}