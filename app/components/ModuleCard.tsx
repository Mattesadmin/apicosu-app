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
        "group relative aspect-square rounded-2xl p-6 flex flex-col items-center justify-center text-center",
        "bg-gradient-to-br from-[#141414] to-[#1f1f1f] border border-white/10",
        "shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_45px_rgba(0,0,0,0.9)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Kürzel */}
      <div className="text-5xl font-extrabold text-white tracking-tight mb-3">
        {short}
      </div>

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>

      {/* Voller Name */}
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      {/* Beschreibung */}
      <p className="text-white/70 text-sm leading-relaxed max-w-[90%]">
        {description}
      </p>
    </Link>
  );
}


