import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold text-foreground mb-4">Get to know us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Top Destinations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Nairobi - Mombasa</li>
              <li>Nairobi - Kisumu</li>
              <li>Nairobi - Kampala</li>
              <li>Nairobi - Dar es Salaam</li>
              <li>Mombasa - Malaba</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Booking Offices</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-semibold text-foreground">Nairobi Office</li>
              <li>Ground Floor, Zahra Building</li>
              <li>River Rd, Nairobi</li>
              <li className="font-semibold text-foreground mt-3">Mombasa Office</li>
              <li>Aswan Building</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Powered By :</h4>
            <p className="text-2xl font-extrabold text-primary tracking-wider">VOLTIC</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-8 text-center">
        <p className="font-semibold text-foreground mb-4">Let's be friends</p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={28} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={28} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={28} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">© Tahmeed 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
