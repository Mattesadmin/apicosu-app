import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative w-full rounded-xl px-8 py-6 bg-[#1a1a1a] border border-white/10",
        "flex items-center justify-between hover:bg-[#222] transition-all duration-200",
        "shadow-[0_2px_8px_rgba(0,0,0,0.35)] hover:shadow-[0_3px_12px_rgba(0,0,0,0.45)]",
        "cursor-pointer"
      )}
    >
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-[#2a2a2a] rounded-lg flex items-center justify-center border border-white/10">
          <Icon className="w-8 h-8 text-white" />
        </div>

        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>

      <div className="text-gray-500 group-hover:text-white transition-colors text-xl">
        →
      </div>
    </Link>
  );
}