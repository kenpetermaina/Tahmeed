import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-primary-foreground py-14">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">TAHMEED</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Leading public bus transporter in Kenya for 16 consecutive years. Travel in comfort and style.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <a href="#" className="block hover:text-primary transition-colors">Home</a>
            <a href="#advantages" className="block hover:text-primary transition-colors">About Us</a>
            <a href="#" className="block hover:text-primary transition-colors">Print Ticket</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <p className="flex items-center gap-2"><Phone size={14} /> 0733 391 352</p>
            <p className="flex items-center gap-2"><Mail size={14} /> info@tahmeedexpress.co.ke</p>
            <p className="flex items-center gap-2"><MapPin size={14} /> Nairobi, Kenya</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Tahmeed Express. All rights reserved. Good footer here.
      </div>
    </div>
  </footer>
);

export default Footer;
