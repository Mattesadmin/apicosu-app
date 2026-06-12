"use client";

import { formatOutput } from "@/lib/formatOutput";

export function ResultBox({
  result,
  loading,
  error,
  emptyLabel = "Noch keine Ausgabe."
}: {
  result: string;
  loading: boolean;
  error?: string | null;
  emptyLabel?: string;
}) {
  return (
    <div className="mt-8 w-full max-w-3xl mx-auto">
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm p-6">

        {/* LOADING */}
        {loading && (
          <div className="text-gray-500 text-sm">
            Die KI verarbeitet deine Eingabe…
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && !result && (
          <div className="text-gray-400 text-sm">
            {emptyLabel}
          </div>
        )}

        {/* RESULT */}
        {!loading && !error && result && (
          <div
            className="prose prose-gray max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatOutput(result) }}
          />
        )}
      </div>
    </div>
  );
}
