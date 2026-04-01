import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#advantages" },
  { label: "Contact Us", href: "#contact" },
  { label: "Print Ticket", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary tracking-tight">TAHMEED</span>
          <span className="text-xs text-muted-foreground hidden sm:block">EXPRESS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#" className="text-sm font-semibold text-primary hover:text-orange-deep transition-colors">
            Sign In / Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="block text-sm font-medium text-foreground py-2">
              {l.label}
            </a>
          ))}
          <a href="#" className="block text-sm font-semibold text-primary py-2">Sign In / Register</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
