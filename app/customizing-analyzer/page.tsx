import ModulePage from "../_components/ModulePage";

export default function Page() {
  return (
    <ModulePage
      short="CA"
      title="Customizing Analyzer"
      description="Analysiert Customizing-Einstellungen und erkennt Konflikte."
      endpoint="/api/customizing-analyzer"
    />
  );
}


