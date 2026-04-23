import { EnlargeableImage } from "@/components/ui/EnlargeableImage";

const ResponsiblePerson = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          Kdo povede kemp?
        </h2>

        {/* Changed md:items-start to md:items-stretch so the columns match height */}
        <div className="bg-surface border border-border rounded-[2rem] py-8 px-4 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 md:gap-14 md:items-stretch relative overflow-hidden shadow-2xl shadow-secondary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-muted/50 rounded-full blur-[100px] pointer-events-none" />

          {/* Image Container: 
            - On mobile: uses aspect-[4/5] to maintain a good shape.
            - On desktop: md:aspect-auto lets it stretch to match the text height.
          */}
          <EnlargeableImage
            src="/profil/profil.png"
            alt="Tomáš Novotný"
            containerClassName="w-[85%] sm:w-[65%] md:w-[40%] lg:w-[45%] aspect-[4/5] md:aspect-auto flex-shrink-0 mx-auto md:mx-0 rounded-3xl md:rounded-2xl shadow-lg"
            className="absolute inset-0 ease-out group-hover:scale-[1.03]"
            zoomOverlay={
              <>
                <div className="absolute inset-0 bg-secondary transition-transform duration-500 ease-out -z-10" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm text-foreground px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm shadow-xl translate-y-4 group-hover:translate-y-0">
                    Zvětšit fotku
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </>
            }
          />

          {/* Text Content - Flex-1 allows it to take remaining width, py-2 gives it slight breathing room from the top/bottom edges of the image */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left z-10 py-2">
            <h3 className="text-3xl font-extrabold mb-1 tracking-tight">
              Tomáš Novotný
            </h3>

            <p className="text-primary font-semibold text-base mb-6 md:mb-8">
              Zakladatel a hlavní vedoucí tábora
            </p>

            <div className="text-muted-foreground leading-relaxed space-y-5 text-base md:text-[17px]">
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