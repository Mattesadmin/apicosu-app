export default function ModulePage({ title, children }) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        {children}
      </div>
    </div>
  );
}
