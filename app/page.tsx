import ModuleCard from "@/app/components/ModuleCard";
import { modules } from "@/app/data/modules";

export default function Home() {
  return (
    <main className="relative max-w-[1400px] mx-auto px-12 pt-40 pb-32">
      {/* Abstand über dem Grid erzwingen */}
      <div className="grid grid-cols-3 gap-24 mt-8">
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
