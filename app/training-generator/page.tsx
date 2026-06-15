import ModulePage from "../_components/ModulePage";

export default function Page() {
  return (
    <ModulePage
      short="TRG"
      title="Training Generator"
      description="Erstellt Schulungsunterlagen aus Screenshots oder Beschreibungen."
      endpoint="/api/training-generator"
    />
  );
}

