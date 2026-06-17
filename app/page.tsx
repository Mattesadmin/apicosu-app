import ModuleCard from "@/app/components/ModuleCard";
import { modules } from "@/app/data/modules";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
