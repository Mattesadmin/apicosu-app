import Link from "next/link";
import { cn } from "@/lib/utils";

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
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-xl p-5 h-[180px] flex flex-col justify-between",
        "bg-[#111] border border-white/10",
        "shadow-[0_4px_20px_rgba(0,0,0,0.25)]",
        "hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-white/20",
        "transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Icon */}
      <Icon className="w-8 h-8 text-white/80" />

      {/* Text */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
