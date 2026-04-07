import { Check } from "lucide-react";
import { SectionGradient } from "../ui/SectionGradient";

const items = [
  "Pro kluky i holky",
  "Děti od 6 do 13 let",
  "Vhodné i pro úplné začátečníky — předchozí zkušenosti nejsou potřeba",
  "Pro děti, které se chtějí hýbat, hrát si a užít si týden bez mobilů",
];

// --- MAIN SECTION ---
const WhoIsItFor = () => {
  return (
    // Added relative positioning so the absolute gradient stays contained within this section
    <section className="relative section-padding z-0">
      
      {/* Injecting the reusable gradient background */}
      <SectionGradient />

      <div className="container-narrow px-5 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
          Pro koho je kemp vhodný?
        </h2>
        
        {/* Card with your defined 'surface' color and subtle shadow */}
        <div className="bg-surface rounded-2xl border border-border p-8 md:p-10 shadow-sm">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;