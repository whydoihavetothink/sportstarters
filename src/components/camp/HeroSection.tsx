import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
            Léto 2026 · Brno
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">Aktivní léto pro děti
Sport, radost a nové sebevědomí
            <br />
            <span className="text-primary">Sport, radost a nové sebevědomí.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Sportstarters je nový sportovní příměstský kemp v Brně pro děti ve věku 6–13 let.
Pohyb, kamarádi a super zážitky — během jednoho týdne.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="#registration">​Přihlásit se </a>
            </Button>
            <Button variant="outline-primary" size="lg" asChild>
              <a href="#program">​Zobrazit program </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;