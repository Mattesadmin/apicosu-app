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
      style={{
        color: "#ffffff",
        mixBlendMode: "normal",
        filter: "none"
      }}
      className={cn(
        "group relative aspect-square rounded-[2rem] p-16 flex flex-col items-center justify-center text-center",
        // Hintergrund + klare Trennung
        "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]",
        "border border-white/25",
        // Tiefer Schatten (Option 3)
        "shadow-[0_0_40px_rgba(0,0,0,0.9)] hover:shadow-[0_0_70px_rgba(0,0,0,1)]",
        // Hover Bewegung
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Apple‑Style Glare (Option 2) */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none 
                      bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20" />

      {/* Kürzel mit weißem Glow (Option 1) */}
      <div className="text-[12rem] font-extrabold text-white !text-white mix-blend-normal filter-none tracking-tight mb-10 
                      drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
        {short}
      </div>

      {/* Icon */}
      <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center mb-8">
        <Icon className="w-12 h-12 text-white !text-white mix-blend-normal filter-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
      </div>

      {/* Voller Name */}
      <h3 className="text-4xl font-semibold text-white !text-white mix-blend-normal filter-none mb-4 
                     drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        {title}
      </h3>

      {/* Beschreibung */}
      <p className="text-white !text-white mix-blend-normal filter-none text-2xl leading-relaxed max-w-[85%] 
                    drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {description}
      </p>
    </Link>
  );
}