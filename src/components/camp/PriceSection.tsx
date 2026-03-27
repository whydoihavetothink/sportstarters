import { Check, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const includedItems = [
  "Celodenní sportovní program",
  "Oběd a svačiny",
  "Kempové tričko",
  "Malé skupiny pro lepší přístup k dětem",
  "Bezpečné prostředí pod dohledem trenérů",
];

const eligibilityCriteria = [
  "sleva až 4 000 Kč na dítě",
  "určeno pro děti s bydlištěm v Brně",
  "věk dítěte do 18 let",
];

const steps = [
  "Zaregistrujte se na portálu Brno iD",
  "Požádejte o rodičovský voucher",
  "Kód voucheru uplatněte při přihlášení na tábor",
];

const PriceSection = () => {
  return (
    <section id="cena" className="section-padding bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEVÁ ČÁST: Finanční příspěvky --- */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Finanční příspěvky až 4 000 Kč na tábor
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Využijte podporu města Brna a snižte cenu příměstského tábora
                pro vaše dítě.
              </p>
            </div>

            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p>
                Na náš příměstský tábor je možné využít{" "}
                <strong>rodičovské vouchery města Brna</strong>. Tento program
                poskytuje finanční podporu na volnočasové aktivity pro děti do 18
                let s trvalým bydlištěm v Brně. Voucher lze uplatnit při
                přihlášení na tábor a snížit tak jeho cenu na 1000 Kč.
              </p>
            </div>

            {/* Bullet pointy & Zvýrazněný box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-3 pt-2">
                {eligibilityCriteria.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-base">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-background border border-border rounded-2xl p-6 shadow-inner">
                <div className="space-y-2 text-base font-medium">
                  <div className="flex justify-between">
                    <span>Cena tábora:</span>
                    <span className="font-bold">5 000 Kč</span>
                  </div>
                  <div className="flex justify-between text-primary">
                    <span>Finanční příspěvek:</span>
                    <span className="font-bold">- až 4 000 Kč</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between items-center text-lg font-bold text-foreground">
                    <span>Výsledná cena:</span>
                    <span className="text-xl text-green-600">od 1 000 Kč</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  (výše příspěvku se řídí podmínkami programu města Brna)
                </p>
              </div>
            </div>

            {/* Jak to funguje & CTA */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-semibold text-foreground">
                  Jak příspěvek získat
                </h3>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-base text-muted-foreground mb-8 ml-1">
                {steps.map((step, index) => (
                  <li key={index} className="pl-2">
                    {step}
                  </li>
                ))}
              </ol>
              <Button asChild variant="default" size="lg">
                <a
                  href="https://www.brnoid.cz/cs/rodicovske-vouchery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Získat příspěvek
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* --- PRAVÁ ČÁST: Cena (Původní PriceSection) --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-surface border-2 border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-lg">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                Cena za jeden turnus
              </p>
              <div className="text-5xl md:text-6xl font-bold mb-1">
                5 000{" "}
                <span className="text-2xl font-semibold text-muted-foreground">
                  CZK
                </span>
              </div>
              <p className="text-muted-foreground mb-8">
                Na kemp lze využít příspěvek od zdravotní pojišťovny i podporu z
                programů města Brna.
              </p>
              <ul className="text-left space-y-3 mb-8">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a href="#registrace">Registrovat se</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;