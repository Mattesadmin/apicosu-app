import ModuleCard from "@/app/components/ModuleCard";
import { modules } from "@/app/data/modules";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full"></div>
      </div>

      {/* HERO */}
      <section className="pt-32 pb-20 text-center space-y-6 relative z-10">
        <h1 className="text-6xl font-bold tracking-tight">
          APICOSU
        </h1>
        <p className="text-white/50 text-lg max-w-[600px] mx-auto leading-relaxed">
          Dein intelligentes Toolkit für SAP‑Beratung, Analyse und Automatisierung.
        </p>
      </section>

      {/* MODULE GRID */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <ModuleCard
              key={m.href}
              title={m.title}
              description={m.description}
              href={m.href}
              icon={m.icon}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
