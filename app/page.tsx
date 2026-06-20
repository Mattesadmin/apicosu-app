import ModuleCard from "@/app/components/ModuleCard";
import { modules } from "@/app/data/modules";

export default function Home() {
  return (
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col gap-6">
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
  );
}