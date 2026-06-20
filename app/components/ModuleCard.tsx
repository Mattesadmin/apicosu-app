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
        "group relative min-h-[420px] rounded-[2rem] p-16 m-6 flex flex-col items-center justify-center text-center",
        "bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]",
        "border border-white/20",
        "shadow-[0_10px_50px_rgba(0,0,0,1)] hover:shadow-[0_20px_80px_rgba(0,0,0,1)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Apple Glare */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none 
                      bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-30" />

      {/* Outer Halo */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none 
                      shadow-[0_20px_120px_rgba(255,255,255,0.1)]" />

      {/* Inner Glow */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none 
                      shadow-[0_-10px_60px_rgba(255,255,255,0.12)]" />

      {/* Light Edge */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none 
                      border border-white/10" />

      {/* Kürzel */}
      <div className="text-[14rem] font-extrabold text-white tracking-tight mb-12 
                      drop-shadow-[0_0_45px_rgba(255,255,255,0.5)]">
        {short}
      </div>

      {/* Icon – Glass Morph */}
      <div className="w-24 h-24 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 
                      flex items-center justify-center mb-10 shadow-[inset_0_0_25px_rgba(255,255,255,0.25)] 
                      hover:shadow-[inset_0_0_35px_rgba(255,255,255,0.35)] transition-all duration-300">
        <Icon className="w-14 h-14 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]" />
      </div>

      {/* Titel */}
      <h3 className="text-12xl font-semibold text-white mb-6 tracking-tight 
                     drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]">
        {title}
      </h3>

      {/* Beschreibung */}
      <p className="text-6xl text-white leading-relaxed max-w-[85%] 
                    drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
        {description}
      </p>
    </Link>
  );
}