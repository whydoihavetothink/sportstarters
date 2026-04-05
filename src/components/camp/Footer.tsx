import { InstagramIcon, FacebookIcon } from "../ui/icons";


const Footer = () => {
  return (
    <footer className="section-padding bg-foreground">
      <div className="container-narrow text-center">
        <h3 className="text-xl font-bold text-background mb-2 font-display">Sportstarters</h3>
        <p className="text-background/60 text-sm space-y-1">
          Brno, Česká republika
        </p>
        
        {/* Kontaktní údaje */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-sm text-background/60">
          <a href="mailto:info@sportstarters.cz" className="hover:text-background transition-colors">
            info@sportstarters.cz
          </a>
          <span className="hidden sm:inline text-background/30">·</span>
          <a href="tel:+420721658117" className="hover:text-background transition-colors">
            +420 721 658 117
          </a>
        </div>

        {/* Sociální sítě */}
        <div className="flex justify-center gap-6 mt-6">
          <a 
            href="https://www.instagram.com/sport.starters/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-background/60 hover:text-background transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://facebook.com/sportstarters" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-background/60 hover:text-background transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-background/30">
          © {new Date().getFullYear()} Sportstarters. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;