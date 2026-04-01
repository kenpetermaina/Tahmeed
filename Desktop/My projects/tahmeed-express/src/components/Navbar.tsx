import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", isRouterLink: true },
  { label: "About Us", href: "#advantages" },
  { label: "Contact Us", href: "#contact" },
  { label: "Print Ticket", href: "/print-ticket", isRouterLink: true },
  { label: "Sign In / Register", href: "/sign-in", isRouterLink: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (href: string, isRouterLink = false) => {
    if (href === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (!isRouterLink && href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            handleLinkClick("/", true);
            setOpen(false);
          }}
        >
          <span className="text-2xl font-bold text-primary tracking-tight">TAHMEED</span>
          <span className="text-xs text-muted-foreground hidden sm:block">EXPRESS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            l.isRouterLink ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => {
                  handleLinkClick(l.href, true);
                  setOpen(false);
                }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => {
                  handleLinkClick(l.href);
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            )
          ))}
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
            l.isRouterLink ? (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm font-medium text-foreground py-2"
                onClick={() => {
                  handleLinkClick(l.href, true);
                  setOpen(false);
                }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="block text-sm font-medium text-foreground py-2"
                onClick={() => {
                  handleLinkClick(l.href);
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            )
          ))}
          <a
            href="#"
            className="block text-sm font-semibold text-primary py-2"
            onClick={() => {
              handleLinkClick("#");
              setOpen(false);
            }}
          >
            Sign In / Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
