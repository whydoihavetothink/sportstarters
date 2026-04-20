import { Ticket, Users } from "lucide-react";

const CouponSection = () => {
  return (
    <section id="kupony" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="bg-surface rounded-xl shadow-sm border border-border p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
                <Users size={16} />
                <span>Sourozenecká sleva</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                Hlásíte více dětí?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Podporujeme sportování v rodině! Při přihlášení více sourozenců zadejte v přihlášce slevový kód a ušetřete.
              </p>

              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-muted/50 p-4 rounded-lg border border-border/50">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Ticket size={40} className="transform -rotate-12" />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Slevový kód</span>
                  <span className="text-xl md:text-2xl font-bold text-foreground font-mono bg-white px-3 py-1 rounded shadow-sm border border-border mt-1 inline-block">RODINA500</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="inline-flex bg-primary/10 text-primary px-2 py-0.5 rounded text-sm font-bold mb-1 w-fit mx-auto sm:mx-0">
                    -500 Kč
                  </span>
                  <span className="text-sm font-medium text-muted-foreground leading-tight">
                    za každé<br />přihlášené dítě
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                Slevový kód nelze využít v kombinaci s finančním příspěvkem města Brna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponSection;