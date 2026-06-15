interface ModulePageProps {
  short: string;
  title: string;
  description: string;
  endpoint: string;
  children?: React.ReactNode;
}

export default function ModulePage({
  short,
  title,
  description,
  endpoint,
  children
}: ModulePageProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">
        {short} – {title}
      </h1>

      <p className="text-white/70">{description}</p>

      <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
        {children}
      </div>
    </div>
  );
}


