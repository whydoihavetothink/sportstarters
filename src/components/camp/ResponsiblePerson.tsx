import { User } from "lucide-react";

const ResponsiblePerson = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Kdo povede kemp?</h2>
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-28 h-28 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Tomáš Novotný</h3>
            <p className="text-primary font-medium text-sm mb-4">Zakladatel a hlavní vedoucí tábora</p>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Jmenuji se Tomáš Novotný, je mi 22&nbsp;let a&nbsp;studuji na Masarykově univerzitě v&nbsp;Brně. Od dětství se věnuji sportu – vyzkoušel jsem fotbal, basketbal, florbal, atletiku i&nbsp;volejbal, přičemž basketbalu jsem se aktivně věnoval více než 10&nbsp;let. Dnes sportuji především rekreačně, ale pohyb je pro mě stále důležitou součástí života.
              </p>
              <p>
                Myšlenka příměstského tábora vznikla z&nbsp;vlastní zkušenosti. Vím, jaké to bylo, když nám rodiče hledali program na léto, abychom netrávili čas jen u&nbsp;počítače. Chtěl jsem proto vytvořit prostředí, kde si děti nejen zasportují, ale zároveň si užijí léto, poznají nové kamarády a&nbsp;na chvíli se odpoutají od mobilů.
              </p>
              <p>
                Cílem tábora je ukázat dětem, že sport může být zábava, přirozený pohyb a&nbsp;zároveň způsob, jak si budovat zdravé návyky a&nbsp;přátelství na celý život.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiblePerson;
