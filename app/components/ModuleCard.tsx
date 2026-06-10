export function ModuleCard({ title, description, onClick }) {
  return (
    <div
      className="module-card"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
