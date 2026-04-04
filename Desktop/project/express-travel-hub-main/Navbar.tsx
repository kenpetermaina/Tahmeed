import logo from "@/assets/tahmeed-logo.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/"><img src={logo} alt="Tahmeed Express" className="h-10 w-auto" /></Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="hover:text-primary transition-colors">Print Ticket</a>
          <a href="#" className="text-primary font-semibold">Sign In / Register</a>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;