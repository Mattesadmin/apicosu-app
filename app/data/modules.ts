import {
  BoltIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  DocumentDuplicateIcon,
  BeakerIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";

export const modules = [
  {
    title: "Error Finder",
    description: "Analysiert SAP-Fehler und generiert Lösungsvorschläge.",
    href: "/error-finder",
    icon: BoltIcon
  },
  {
    title: "Customizing Analyzer",
    description: "Analysiert Customizing-Einstellungen und erkennt Konflikte.",
    href: "/customizing-analyzer",
    icon: WrenchScrewdriverIcon
  },
  {
    title: "Transport Impact Analyzer",
    description: "Ermittelt Auswirkungen von Transporten auf das System.",
    href: "/transport-impact",
    icon: TruckIcon
  },
  {
    title: "Blueprint Generator",
    description: "Erstellt automatisch Blueprint-Dokumentationen.",
    href: "/blueprint-generator",
    icon: DocumentDuplicateIcon
  },
  {
    title: "Testdaten Generator",
    description: "Generiert realistische Testdaten für SAP-Prozesse.",
    href: "/testdaten-generator",
    icon: BeakerIcon
  },
  {
    title: "Training Generator",
    description: "Erstellt Trainingsunterlagen aus SAP-Prozessen.",
    href: "/training-generator",
    icon: BookOpenIcon
  }
];
