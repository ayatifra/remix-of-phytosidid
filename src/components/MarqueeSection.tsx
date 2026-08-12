import { Wheat, ShieldCheck, Sprout, Droplets } from "lucide-react";

const items = [
  { icon: Wheat, label: "Engrais & Fertilisants" },
  { icon: ShieldCheck, label: "Protection des Cultures" },
  { icon: Sprout, label: "Semences Agricoles" },
  { icon: Droplets, label: "Irrigation & Équipement" },
  { icon: Wheat, label: "Engrais & Fertilisants" },
  { icon: ShieldCheck, label: "Protection des Cultures" },
  { icon: Sprout, label: "Semences Agricoles" },
  { icon: Droplets, label: "Irrigation & Équipement" },
];

const MarqueeSection = () => (
  <div className="bg-phyto-600 py-4 overflow-hidden">
    <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-primary-foreground/90 font-medium flex items-center gap-2">
            <item.icon className="w-4 h-4" /> {item.label}
          </span>
          <span className="text-phyto-200 ml-8">•</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeSection;
