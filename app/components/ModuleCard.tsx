import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group w-full rounded-xl px-8 py-6 bg-[#1b1b1b] border border-[#2a2a2a]",
        "flex items-center justify-between hover:bg-[#232323] transition-all duration-200",
        "shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
      )}
    >
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-[#2a2a2a] rounded-lg flex items-center justify-center border border-[#3a3a3a]">
          <Icon className="w-8 h-8 text-[#cfd8dc]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#e0e0e0]">{title}</h3>
          <p className="text-sm text-[#9e9e9e]">{description}</p>
        </div>
      </div>

      <div className="text-[#757575] group-hover:text-[#e0e0e0] transition-colors text-xl">
        →
      </div>
    </Link>
  );
}