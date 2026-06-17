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
        "group relative aspect-square rounded-[2rem] p-14 flex flex-col items-center justify-center text-center",
        // Hintergrund + Abhebung
        "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-cyan-400/40",
        "shadow-[0_0_70px_rgba(0,255,255,0.25)] hover:shadow-[0_0_90px_rgba(0,255,255,0.35)]",
        // Hover Effekt
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Kürzel */}
      <div className="text-[10rem] font-extrabold text-white tracking-tight mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
        {short}
      </div>

      {/* Icon */}
      <div className="w-20 h-20 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-8">
        <Icon className="w-12 h-12 text-cyan-300" />
      </div>

      {/* Voller Name */}
      <h3 className="text-4xl font-semibold text-white mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
        {title}
      </h3>

      {/* Beschreibung */}
      <p className="text-white/90 text-xl leading-relaxed max-w-[85%]">
        {description}
      </p>
    </Link>
  );
}