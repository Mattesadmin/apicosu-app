export function formatOutput(text: string) {
  // Listenblöcke erkennen und in <ul> packen
  const withLists = text.replace(
    /(?:^|\n)(- .*(?:\n- .*)*)/g,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => line.replace(/- (.*)/, "<li>$1</li>"))
        .join("");

      return `<ul>${items}</ul>`;
    }
  );

  return withLists
    .replace(/\n---\n/g, "<hr class='my-6' />")
    .replace(/\n### (.*)/g, "<h3>$1</h3>")
    .replace(/\n## (.*)/g, "<h2>$1</h2>")
    .replace(/\n# (.*)/g, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<p></p>");
}
