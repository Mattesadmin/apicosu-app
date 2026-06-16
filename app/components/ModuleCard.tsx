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
        "group relative overflow-hidden rounded-2xl p-4 flex flex-col justify-between h-[220px]",
        "bg-[#0f0f0f] border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)]",
        "transition-all duration-300",
        "hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:border-white/20 hover:-translate-y-1",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 group-hover:opacity-100 before:transition-opacity",
        className
      )}
    >
      {/* Animated Glow Border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 blur-[2px]"></div>
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Text */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}
