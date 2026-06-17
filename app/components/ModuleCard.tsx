import Link from "next/link";
import { cn } from "@/lib/utils";

const patternMap: Record<string, string> = {
  "Error Finder": "/patterns/pattern-error.svg",
  "Customizing Analyzer": "/patterns/pattern-customizing.svg",
  "Transport Impact Analyzer": "/patterns/pattern-transport.svg",
  "Blueprint Generator": "/patterns/pattern-blueprint.svg",
  "Testdaten Generator": "/patterns/pattern-testdata.svg",
  "Training Generator": "/patterns/pattern-training.svg"
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
  const pattern = patternMap[title] || "";

  return (
    <Link
      href={href}
      className={cn(
        "group relative aspect-square rounded-2xl p-6 flex flex-col justify-between",
        "bg-gradient-to-br from-[#111] to-[#1b1b1b] border border-cyan-500/20",
        "shadow-[0_4px_25px_rgba(0,255,255,0.08)] hover:shadow-[0_6px_35px_rgba(0,255,255,0.18)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
        "overflow-hidden no-underline",
        className
      )}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-semibold text-cyan-300 tracking-wide">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/80 text-sm leading-relaxed mt-2">
        {description}
      </p>

      {/* Pattern Background */}
      {pattern && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-right-bottom bg-no-repeat bg-[length:140px]"
          style={{ backgroundImage: `url(${pattern})` }}
        />
      )}
    </Link>
  );
}


