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

// --- Vlastní SVG ikony (náhrada za odstraněné Lucide ikony) ---

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);