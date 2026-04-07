import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../ui/icons";
import { SOCIAL_MEDIA_LINKS } from "@/lib/campData";

const links = [
  { label: "O Kempu", href: "#o-kempu" },
  { label: "Program", href: "#program" },
  { label: "Termíny a lokalita", href: "#terminy" },
  { label: "Cena", href: "#cena" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 px-5 md:px-8">
        <a href="#" className="font-display font-bold text-xl tracking-tight">
          Sportstarters
        </a>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l border-border pl-4 ml-2">
            <Button variant="cta" size="sm" asChild>
              <a href="#registrace">Přihláška</a>
            </Button>
            
            <div className="flex items-center gap-3">
              <a 
                href={SOCIAL_MEDIA_LINKS.instagram}
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_MEDIA_LINKS.facebook}
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 space-y-4">
          <div className="space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          
          <Button variant="cta" size="sm" className="w-full" asChild>
            <a href="#registrace" onClick={() => setOpen(false)}>Přihlásit se</a>
          </Button>

          {/* Mobile social icons */}
          <div className="flex items-center justify-center gap-6 pt-2 pb-1 border-t border-border/50">
            <a 
              href={SOCIAL_MEDIA_LINKS.instagram}
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a 
              href={SOCIAL_MEDIA_LINKS.facebook}
              target="_blank" 
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;