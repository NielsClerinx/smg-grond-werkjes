import { Mountain, Hammer, Truck, UserCog, Waves, Pickaxe } from "lucide-react";
import demolition from "@/assets/service-demolition.jpg";
import sewer from "@/assets/service-sewer.jpg";
import cleanup from "@/assets/service-cleanup.jpg";
import operator from "@/assets/service-operator.jpg";
import groundwork from "@/assets/service-groundwork.jpg";

export const services = [
  {
    slug: "grond-en-afbraakwerken",
    icon: Mountain,
    title: "Grond- & Afbraakwerken",
    short: "Uitgraven, nivelleren en afbraak van constructies — efficiënt en proper.",
    description:
      "Van bouwputten en funderingen tot het volledig afbreken van constructies. Met krachtig materieel en een ervaren team voeren we elk grondwerk en elke afbraak nauwkeurig en veilig uit.",
    image: groundwork,
  },
  {
    slug: "renovatiesloop",
    icon: Hammer,
    title: "Renovatiesloop / Binnenafbraak",
    short: "Selectief slopen van binnenafwerkingen voor een propere renovatiebasis.",
    description:
      "Wij verwijderen bestaande binnenafwerking, vloeren, wanden en plafonds met respect voor de draagstructuur. Ideaal voor renovaties waar precisie en netheid centraal staan.",
    image: demolition,
  },
  {
    slug: "opruimingswerken",
    icon: Truck,
    title: "Opruimingswerken",
    short: "Containers, afvoer en complete site clean-up.",
    description:
      "Na de werken laten we niets achter. Wij zorgen voor het opladen, sorteren en correct afvoeren van puin en afval — uw werf wordt instapklaar opgeleverd.",
    image: cleanup,
  },
  {
    slug: "verhuur-machinist",
    icon: UserCog,
    title: "Verhuur Machinist",
    short: "Ervaren machinist met materieel beschikbaar voor uw project.",
    description:
      "Heeft u tijdelijk een ervaren machinist nodig? Wij verhuren onze expertise — met of zonder machine — voor projecten van elke omvang.",
    image: operator,
  },
  {
    slug: "rioleringswerken",
    icon: Waves,
    title: "Kleine Rioleringswerken",
    short: "Aanleg en herstelling van rioleringen voor woning en tuin.",
    description:
      "Van aansluitingen op het hoofdriool tot kleine herstellingen — wij voeren rioleringswerken uit met oog voor de juiste hellingen en duurzaamheid.",
    image: sewer,
  },
] as const;

export const allIcons = { Mountain, Hammer, Truck, UserCog, Waves, Pickaxe };
