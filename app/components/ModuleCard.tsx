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
        "group relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between",
        "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl",
        "transition-all duration-300",
        "hover:scale-[1.03] hover:shadow-2xl hover:border-cyan-400/40",
        "hover:bg-white/20",
        className
      )}
    >
      {/* Glare Effekt */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center mb-6">
        <Icon className="w-16 h-16 text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)] transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Text */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}
