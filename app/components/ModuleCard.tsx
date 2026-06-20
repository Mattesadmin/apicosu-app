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
        "group w-full rounded-2xl px-12 py-10 bg-[#181818] border border-[#2a2a2a]",
        "flex items-center justify-between hover:bg-[#202020] transition-all duration-300",
        "shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]",
        "cursor-pointer"
      )}
    >
      <div className="flex items-center gap-10">
        <div className="w-20 h-20 bg-[#242424] rounded-xl flex items-center justify-center border border-[#3a3a3a]">
          <Icon className="w-10 h-10 text-[#00aaff]" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[#f5f5f5]">{title}</h3>
          <p className="text-base text-[#b0b0b0] leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="text-[#666] group-hover:text-[#00aaff] transition-colors text-3xl">
        →
      </div>
    </Link>
  );
}