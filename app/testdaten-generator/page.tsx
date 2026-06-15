import ModulePage from "../_components/ModulePage";

export default function Page() {
  return (
    <ModulePage
      short="TG"
      title="Testdaten Generator"
      description="Generiert realistische Testdaten für SAP-Prozesse."
      endpoint="/api/testdaten-generator"
    />
  );
}



