import ModuleCard from "@/app/components/ModuleCard";
import { modules } from "@/app/data/modules";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto px-12 pt-32 pb-20">
      <div className="grid grid-cols-3 gap-30">
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
    </main>
  );
}
