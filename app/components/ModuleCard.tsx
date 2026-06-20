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
        "group relative rounded-[2rem] p-10 m-4 h-[420px]",
        "flex flex-col items-center justify-center text-center",
        "bg-gradient-to-br from-[#111] to-[#1a1a1a]",
        "border border-white/10",
        "shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Glare */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20" />

      {/* Kürzel */}
      <div className="text-[9rem] font-extrabold text-white tracking-tight mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
        {short}
      </div>

      {/* Icon */}
      <div className="w-20 h-20 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[inset_0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[inset_0_0_35px_rgba(255,255,255,0.35)] transition-all duration-300">
        <Icon className="w-12 h-12 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
      </div>

      {/* Titel */}
      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        {title}
      </h3>

      {/* Beschreibung */}
      <p className="text-base text-gray-300 leading-relaxed max-w-[85%]">
        {description}
      </p>
    </Link>
  );
}