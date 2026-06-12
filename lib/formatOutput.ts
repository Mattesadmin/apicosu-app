export function formatOutput(text: string) {
  if (!text) return "";

  let html = text;

  // Escape HTML (Sicherheit)
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Codeblöcke ```code```
  html = html.replace(/```([\s\S]*?)```/g, (_match, code) => {
    return `<pre class="bg-[#0d1117] text-gray-200 p-4 rounded-lg overflow-x-auto"><code>${code}</code></pre>`;
  });

  // Inline-Code `code`
  html = html.replace(/`([^`]+)`/g, `<code class="bg-[#0d1117] text-gray-200 px-1 rounded">$1</code>`);

  // Fett **text**
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Überschriften
  html = html
    .replace(/^### (.*)$/gm, "<h3 class='text-xl font-semibold mt-6 mb-2'>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2 class='text-2xl font-bold mt-8 mb-3'>$1</h2>")
    .replace(/^# (.*)$/gm, "<h1 class='text-3xl font-bold mt-10 mb-4'>$1</h1>");

  // Nummerierte Listen
  html = html.replace(
    /(?:^|\n)(\d+\. .*(?:\n\d+\. .*)*)/g,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => line.replace(/\d+\. (.*)/, "<li>$1</li>"))
        .join("");
      return `<ol class="list-decimal ml-6 my-4">${items}</ol>`;
    }
  );

  // Unnummerierte Listen
  html = html.replace(
    /(?:^|\n)(- .*(?:\n- .*)*)/g,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => line.replace(/- (.*)/, "<li>$1</li>"))
        .join("");
      return `<ul class="list-disc ml-6 my-4">${items}</ul>`;
    }
  );

  // Horizontale Linie
  html = html.replace(/\n---\n/g, "<hr class='my-6 border-gray-700' />");

  // Absätze (aber nicht in <pre> oder <ul>/<ol>)
  html = html
    .split("\n")
    .map((line) => {
      if (
        line.startsWith("<h") ||
        line.startsWith("<ul") ||
        line.startsWith("<ol") ||
        line.startsWith("<pre") ||
        line.startsWith("<hr") ||
        line.trim() === ""
      ) {
        return line;
      }
      return `<p class="my-3 leading-relaxed">${line}</p>`;
    })
    .join("");

  return html;
}
