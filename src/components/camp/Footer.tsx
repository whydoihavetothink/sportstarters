const Footer = () => {
  return (
    <footer className="section-padding bg-foreground">
      <div className="container-narrow text-center">
        <h3 className="text-xl font-bold text-background mb-2 font-display">Sportstarters</h3>
        <p className="text-background/60 text-sm space-y-1">
          Brno, Czech Republic
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-sm text-background/60">
          <a href="mailto:info@sportstarters.cz" className="hover:text-background transition-colors">
            info@sportstarters.cz
          </a>
          <span className="hidden sm:inline text-background/30">·</span>
          <a href="tel:+420123456789" className="hover:text-background transition-colors">
            +420 123 456 789
          </a>
        </div>
        <p className="mt-8 text-xs text-background/30">
          © {new Date().getFullYear()} Sportstarters. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
