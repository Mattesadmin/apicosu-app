"use client";

import { ModuleCard } from "@/app/components/ModuleCard";
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  DocumentDuplicateIcon,
  BeakerIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">
          APICOSU – AI‑powered SAP Tools
        </h1>
        <p className="text-gray-400 mb-12">
          Wähle ein Modul aus, um deine Analyse zu starten.
        </p>

        {/* BENTO GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            auto-rows-[200px]
          "
        >

          {/* GROSSE KARTE */}
          <div className="md:col-span-2 md:row-span-2">
            <ModuleCard
              title="Error Finder"
              description="Analysiert SAP Logs, Dumps und Fehlermeldungen automatisch."
              icon={<BoltIcon className="w-10 h-10" />}
              href="/error-finder"
            />
          </div>

          {/* MITTLERE KARTEN */}
          <ModuleCard
            title="Customizing Analyzer"
            description="Analysiert Customizing‑Einstellungen und erkennt Konflikte."
            icon={<WrenchScrewdriverIcon className="w-10 h-10" />}
            href="/customizing-analyzer"
          />

          <ModuleCard
            title="Transport Impact Analyzer"
            description="Ermittelt Auswirkungen von Transporten auf Systeme & Prozesse."
            icon={<TruckIcon className="w-10 h-10" />}
            href="/transport-impact-analyzer"
          />

          {/* BREITE KARTE */}
          <div className="md:col-span-3">
            <ModuleCard
              title="Blueprint Generator"
              description="Erstellt automatisch technische Blueprints aus deinen Eingaben."
              icon={<DocumentDuplicateIcon className="w-10 h-10" />}
              href="/blueprint-generator"
            />
          </div>

          {/* KLEINE KARTEN */}
          <ModuleCard
            title="Testdaten Generator"
            description="Generiert realistische Testdaten für SAP‑Prozesse."
            icon={<BeakerIcon className="w-10 h-10" />}
            href="/testdaten-generator"
          />

          <ModuleCard
            title="Training Generator"
            description="Erstellt Schulungsunterlagen aus deinen SAP‑Screenshots."
            icon={<BookOpenIcon className="w-10 h-10" />}
            href="/training-generator"
          />

        </div>
      </div>
    </div>
  );
}


