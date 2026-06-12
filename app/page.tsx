"use client";

import Link from "next/link";
import { ModuleCard } from "@/app/components/ModuleCard";

export default function HomePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 space-y-16">

      {/* HEADER */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-white">
          APICOSU – AI‑Powered Consulting Suite
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Die Premium‑Werkzeuge für SAP‑Berater: Fehler analysieren, 
          Customizing bewerten, Transporte prüfen, Blueprints erzeugen, 
          Testdaten generieren und Trainingsunterlagen erstellen.
        </p>
      </header>

      {/* MODULE GRID */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">
          Module
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link href="/error-finder">
            <ModuleCard
              title="Error Finder"
              description="Analysiert ST22‑Dumps, SM21‑Logs, Fehlermeldungen und Screenshots."
            />
          </Link>

          <Link href="/customizing-analyzer">
            <ModuleCard
              title="Customizing Analyzer"
              description="Bewertet Customizing‑Einstellungen, Tabellen und IMG‑Pfade."
            />
          </Link>

          <Link href="/transport-impact-analyzer">
            <ModuleCard
              title="Transport Impact Analyzer"
              description="Schätzt Auswirkungen von Transporten und Objekten ein."
            />
          </Link>

          <Link href="/blueprint-generator">
            <ModuleCard
              title="Blueprint Generator"
              description="Erzeugt strukturierte Blueprints aus Prozess‑ oder Anforderungsbeschreibungen."
            />
          </Link>

          <Link href="/testdaten-generator">
            <ModuleCard
              title="Testdaten Generator"
              description="Generiert passende Testdaten für Szenarien und Tabellen."
            />
          </Link>

          <Link href="/training-generator">
            <ModuleCard
              title="Training Generator"
              description="Erstellt Trainingsunterlagen, Agenden und Lerninhalte."
            />
          </Link>

        </div>
      </section>
    </div>
  );
}


