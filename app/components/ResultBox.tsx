export default function ResultBox({ model, output }: { model: string; output: string }) {
  if (!output) return null;

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto">
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm p-6">
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-semibold text-gray-700">Modell:</span> {model}
        </div>

        <div
          className="prose prose-gray max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatOutput(output) }}
        />
      </div>
    </div>
  );
}
