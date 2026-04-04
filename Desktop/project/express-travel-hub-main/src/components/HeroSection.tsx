import { useState } from "react";
import heroBus from "@/assets/hero-bus.jpg";
import { MapPin, Calendar, Users, Search, Phone } from "lucide-react";

const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16">
      <div className="absolute inset-0">
        <img src={heroBus} alt="Tahmeed Bus" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 text-center px-4 mb-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-4 tracking-tight">
          Book. Pay. Travel.
        </h1>
        <p className="text-lg text-primary-foreground/80">
          Easy, safer and Convenient booking
        </p>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="bg-primary rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-primary-foreground mb-2 uppercase tracking-wider">
                <MapPin size={14} /> From
              </label>
              <input
                type="text"
                placeholder="Departure location"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-primary-foreground mb-2 uppercase tracking-wider">
                <MapPin size={14} /> To
              </label>
              <input
                type="text"
                placeholder="Select destination"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-primary-foreground mb-2 uppercase tracking-wider">
                <Calendar size={14} /> Travel Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs font-semibold text-primary-foreground mb-2 uppercase tracking-wider">
                <Users size={14} /> Passengers
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} passenger{n > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => {
              const message = `Hello Tahmeed Express! I'd like to book:\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nPassengers: ${passengers}\nPlease confirm availability.`;
              window.open(`https://wa.me/254733391352?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full py-4 rounded-lg bg-transparent hover:bg-primary-foreground/10 text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 transition-colors border border-primary-foreground/30 cursor-pointer"
          >
            <Phone size={20} />
            Book Now
          </button>
        </div>
      </div>

      <a
        href="tel:0733391352"
        className="relative z-10 mt-8 inline-flex items-center gap-4 bg-background rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-shadow"
      >
        <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Phone size={20} className="text-primary-foreground" />
        </span>
        <span>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">CALL US NOW</span>
          <span className="block text-xl font-bold text-foreground">0733 391 352</span>
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
