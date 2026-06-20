import ModuleCard from "@/app/components/ModuleCard";
import { modules } from "@/app/data/modules";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-8">
      <div className="grid grid-cols-3 gap-12">
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
    </div>
  );
}