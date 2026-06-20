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
        "group w-full rounded-xl px-8 py-6 bg-[#f9f9f9] border border-[#e0e0e0]",
        "flex items-center justify-between hover:bg-[#f0f0f0] transition-all duration-200",
        "shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
      )}
    >
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-[#e8eef6] rounded-lg flex items-center justify-center border border-[#d0d7e2]">
          <Icon className="w-8 h-8 text-[#0070f2]" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1a1a1a]">{title}</h3>
          <p className="text-sm text-[#555]">{description}</p>
        </div>
      </div>

      <div className="text-[#999] group-hover:text-[#0070f2] transition-colors text-xl">
        →
      </div>
    </Link>
  );
}