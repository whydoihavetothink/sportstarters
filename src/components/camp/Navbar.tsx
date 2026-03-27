import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
{ label: "O Kempu", href: "#o-kempu" },
{ label: "Program", href: "#program" },
{ label: "Cena", href: "#cena" },
{ label: "Termíny a lokalita", href: "#terminy" }];


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
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            
              {l.label}
            </a>
          )}
          <Button variant="cta" size="sm" asChild>
            <a href="#registrace">Přihláška</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden border-t border-border bg-background px-5 py-4 space-y-3">
          {links.map((l) =>
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="block text-sm font-medium text-muted-foreground hover:text-foreground">
          
              {l.label}
            </a>
        )}
          <Button variant="cta" size="sm" className="w-full" asChild>
            <a href="#registrace" onClick={() => setOpen(false)}>Přihlásit se</a>
          </Button>
        </div>
      }
    </nav>);

};

export default Navbar;