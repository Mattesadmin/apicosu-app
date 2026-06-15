"use client";

import { ModuleCard } from "@/app/components/ModuleCard";
import {
  AlertTriangle,
  Settings,
  Truck,
  FileCode,
  FlaskRound,
  GraduationCap
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">
          APICOSU – AI‑powered SAP Tools
        </h1>
        <p className="text-gray-400 mb-12">
          Wähle ein Modul aus und starte deine Analyse.
        </p>

        {/* GRID: 2 Reihen × 3 Module */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <ModuleCard
            title="Error Finder"
            description="Findet Fehler, Dumps und Log‑Probleme automatisch."
            icon={<AlertTriangle className="w-12 h-12" />}
            href="/error-finder"
          />

          <ModuleCard
            title="Customizing Analyzer"
            description="Analysiert Customizing‑Einstellungen und erkennt Konflikte."
            icon={<Settings className="w-12 h-12" />}
            href="/customizing-analyzer"
          />

          <ModuleCard
            title="Transport Impact Analyzer"
            description="Ermittelt Auswirkungen von Transporten auf Prozesse & Systeme."
            icon={<Truck className="w-12 h-12" />}
            href="/transport-impact-analyzer"
          />

          <ModuleCard
            title="Blueprint Generator"
            description="Erstellt technische Blueprints aus deinen Eingaben."
            icon={<FileCode className="w-12 h-12" />}
            href="/blueprint-generator"
          />

          <ModuleCard
            title="Testdaten Generator"
            description="Generiert realistische Testdaten für SAP‑Prozesse."
            icon={<FlaskRound className="w-12 h-12" />}
            href="/testdaten-generator"
          />

          <ModuleCard
            title="Training Generator"
            description="Erstellt Schulungsunterlagen aus Screenshots."
            icon={<GraduationCap className="w-12 h-12" />}
            href="/training-generator"
          />

        </div>
      </div>
    </div>
  );
}




