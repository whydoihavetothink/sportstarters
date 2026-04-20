import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const backgroundImage = "/loga/uvodni-fotka.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden section-padding flex items-center min-h-[70vh]">

      {/* 1. Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* 2. Overlay Layer (Light transparent background to ensure text readability) */}
      <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-[2px]" />

      {/* 3. Content Layer */}
      <div className="container-narrow text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>

          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6 shadow-sm">
            Léto 2026 · Brno
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            <span className="text-primary">Příměstský tábor Brno</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-8 font-medium">
            Sportstarters je nový sportovní příměstský tábor v Brně pro děti ve věku 6–13 let.
            Pohyb, kamarádi a super zážitky — během jednoho týdne.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button variant="cta" size="xl" asChild>
              <a href="#registrace">Přihlásit se</a>
            </Button>
            {/* Added a slight background blur to the outline button so it stands out over the background */}
            <Button variant="outline-primary" size="lg" className="bg-background/50 backdrop-blur-sm" asChild>
              <a href="#program">Zobrazit program</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;