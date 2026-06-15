import ModuleCard from "@/app/components/ModuleCard";
import { Wrench, FileText, Boxes, Cog, Database, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-white mb-12">APICOSU Module</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ModuleCard
          title="Error Finder"
          description="Finde Fehler in deinen Daten automatisch."
          href="/error-finder"
          icon={Wrench}
        />

        <ModuleCard
          title="Customizing Analyzer"
          description="Analysiere Customizing-Einstellungen effizient."
          href="/customizing-analyzer"
          icon={Cog}
        />

        <ModuleCard
          title="Transport Impact Analyzer"
          description="Analysiere Transportabhängigkeiten."
          href="/transport-impact-analyzer"
          icon={Boxes}
        />

        <ModuleCard
          title="Blueprint Generator"
          description="Erstelle automatisch technische Blueprints."
          href="/blueprint-generator"
          icon={FileText}
        />

        <ModuleCard
          title="Testdaten Generator"
          description="Generiere Testdaten für deine Systeme."
          href="/testdaten-generator"
          icon={Database}
        />

        <ModuleCard
          title="Training Generator"
          description="Erstelle Trainingsunterlagen automatisch."
          href="/training-generator"
          icon={GraduationCap}
        />
      </div>
    </main>
  );
}
