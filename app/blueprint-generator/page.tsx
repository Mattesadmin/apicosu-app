"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function BlueprintGeneratorPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleAnalyze() {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/blueprint-generator", {
      method: "POST",
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-3xl">

        <h1 className="text-4xl font-bold mb-4 text-center">
          Blueprint Generator
        </h1>
        <p className="text-gray-400 mb-10 text-center">
          Erstellt technische Blueprints aus deinen Eingaben.
        </p>

        <div className="
          backdrop-blur-xl bg-white/5 border border-cyan-500/20
          rounded-2xl p-8 shadow-[0_0_25px_rgba(0,255,255,0.15)]
        ">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Beschreibe deinen Prozess oder dein Objekt..."
            className="
              w-full h-48 p-4 rounded-xl bg-black/40
              border border-cyan-500/20 text-gray-200
              focus:outline-none focus:border-cyan-400 resize-none
            "
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="
              w-full mt-6 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500
              active:bg-cyan-400 transition text-white font-semibold
              shadow-[0_0_20px_rgba(0,255,255,0.25)]
              hover:shadow-[0_0_30px_rgba(0,255,255,0.45)]
            "
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin w-5 h-5" />
                Generiere...
              </span>
            ) : (
              "Blueprint erstellen"
            )}
          </button>
        </div>

        {result && (
          <div className="
            mt-10 backdrop-blur-xl bg-white/5 border border-cyan-500/20
            rounded-2xl p-8 shadow-[0_0_25px_rgba(0,255,255,0.15)]
            whitespace-pre-wrap
          ">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}



