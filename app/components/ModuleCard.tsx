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
        "group relative rounded-xl p-6 h-[200px] flex flex-col justify-between",
        "bg-[#111] border border-white/10",
        "shadow-[0_4px_20px_rgba(0,0,0,0.25)]",
        "hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-white/20",
        "transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/50 text-xs leading-relaxed mt-2">{description}</p>

      {/* Pattern Background */}
      {pattern && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-right-bottom bg-no-repeat bg-[length:120px]"
          style={{ backgroundImage: `url(${pattern})` }}
        />
      )}
    </Link>
  );
}

