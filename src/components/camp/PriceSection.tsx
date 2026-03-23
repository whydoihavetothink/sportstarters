import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
"Celodenní sportovní program",
"Oběd a svačiny",
"Kempové tričko",
"Malé skupiny pro lepší přístup k dětem",
"Bezpečné prostředí pod dohledem trenérů"];


const PriceSection = () => {
  return (
    <section id="price" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Cena</h2>
        <div className="bg-surface border-2 border-primary/20 rounded-2xl p-8 md:p-10 text-center max-w-lg mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">​Cena za jeden turnus </p>
          <div className="text-5xl md:text-6xl font-bold mb-1">
            5 000 <span className="text-2xl font-semibold text-muted-foreground">CZK</span>
          </div>
          <p className="text-muted-foreground mb-8">Na kemp lze využít příspěvek od zdravotní pojišťovny i podporu z programů města Brna.</p>
          <ul className="text-left space-y-3 mb-8">
            {included.map((item) =>
            <li key={item} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span>{item}</span>
              </li>
            )}
          </ul>
          <Button variant="cta" size="lg" className="w-full" asChild>
            <a href="#registrace">Registrovat se </a>
          </Button>
        </div>
      </div>
    </section>);

};

export default PriceSection;