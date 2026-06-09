"use client";

import Link from "next/link";

export default function HomePage() {
  const modules = [
    {
      name: "Error Finder",
      path: "/error-finder",
    },
    {
      name: "Customizing Analyzer",
      path: "/customizing-analyzer",
    },
    {
      name: "Transport Impact Analyzer",
      path: "/transport-impact-analyzer",
    },
    {
      name: "Blueprint Generator",
      path: "/blueprint-generator",
    },
    {
      name: "Testdaten Generator",
      path: "/testdaten-generator",
    },
    {
      name: "Training Generator",
      path: "/training-generator",
    },
  ];

  return (
    <main className="mx-auto max-w-[1400px] px-6 py-12">
      <h1 className="text-4xl font-semibold mb-8">APICOSU Module</h1>
      <p className="text-gray-600 mb-10">
        Wähle ein Modul aus, um eine Analyse zu starten.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {modules.map((m) => (
          <Link key={m.name} href={m.path}>
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition cursor-pointer">
              <h2 className="text-xl font-medium mb-2">{m.name}</h2>
              <p className="text-sm text-gray-500">Modul öffnen</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
