import logo from "@/assets/tahmeed-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/"><img src={logo} alt="Tahmeed Express" className="h-10 w-auto" /></Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          <Link to="/print-ticket" className="hover:text-primary transition-colors">Print Ticket</Link>
          <a href="#" className="text-primary font-semibold">Sign In / Register</a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4 text-sm font-medium text-foreground">
          <Link to="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/print-ticket" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Print Ticket</Link>
          <a href="#" className="text-primary font-semibold" onClick={() => setIsOpen(false)}>Sign In / Register</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
