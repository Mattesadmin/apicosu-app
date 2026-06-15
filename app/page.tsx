// TEST123

"use client";

import Link from "next/link";

export default function Home() {
  const modules = [
    { short: "EF", title: "Error Finder", desc: "Analysiert Logs & Fehlermeldungen automatisch.", href: "/error-finder" },
    { short: "CA", title: "Customizing Analyzer", desc: "Erkennt Konflikte in Customizing-Einstellungen.", href: "/customizing-analyzer" },
    { short: "TIA", title: "Transport Impact Analyzer", desc: "Analysiert Auswirkungen von Transporten.", href: "/transport-impact-analyzer" },
    { short: "BG", title: "Blueprint Generator", desc: "Erstellt technische Blueprints automatisch.", href: "/blueprint-generator" },
    { short: "TG", title: "Testdaten Generator", desc: "Generiert realistische Testdaten.", href: "/testdaten-generator" },
    { short: "TRG", title: "Training Generator", desc: "Erstellt Schulungsunterlagen aus Screenshots.", href: "/training-generator" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-6xl">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {modules.map((m) => (
            <Link
              key={m.title}
              href={m.href}
              className="
                group
                backdrop-blur-xl
                bg-white/5
                border border-cyan-500/20
                rounded-2xl
                p-10
                shadow-[0_0_25px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_35px_rgba(0,255,255,0.35)]
                transition
                hover:-translate-y-2
              "
            >
              <div className="flex flex-col items-center text-center gap-4">

                <div className="
                  text-4xl font-bold
                  px-6 py-3
                  rounded-xl
                  bg-white/10
                  border border-cyan-500/30
                  shadow-[0_0_20px_rgba(0,255,255,0.25)]
                ">
                  {m.short}
                </div>

                <h2 className="text-2xl font-semibold">{m.title}</h2>
                <p className="text-gray-400">{m.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
