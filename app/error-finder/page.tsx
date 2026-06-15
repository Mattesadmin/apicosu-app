import ModulePage from "../_components/ModulePage";

export default function Page() {
  return (
    <ModulePage
      short="EF"
      title="Error Finder"
      description="Analysiert SAP Logs, Dumps und Fehlermeldungen automatisch."
      endpoint="/api/error-finder"
    />
  );
}


