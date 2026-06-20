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
        "rounded-2xl p-8 h-[360px] bg-[#1a1a1a] border border-white/10",
        "flex flex-col items-center justify-center text-center",
        "hover:bg-[#222] transition-all duration-200",
        "shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div className="text-6xl font-bold text-white mb-4">
        {short}
      </div>

      <div className="w-16 h-16 bg-[#2a2a2a] rounded-xl flex items-center justify-center mb-4 border border-white/10">
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-300 max-w-[80%]">
        {description}
      </p>
    </Link>
  );
}