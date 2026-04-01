import { useState } from "react";
import { MapPin, Calendar, Users, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroBus from "@/assets/hero-bus.jpg";

const locations = ["Nairobi", "Mombasa", "Kisumu", "Kampala", "Dar es Salaam", "Arusha"];

const HeroSection = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleBook = () => {
    const msg = `Hello! I'd like to book a ticket from ${from} to ${to} on ${date} for ${passengers} passenger(s).`;
    window.location.href = `https://wa.me/254733391352?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBus} alt="Tahmeed Express Bus" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-4 animate-fade-in-up">
          Book. Pay. Travel.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Easy, safer and convenient booking
        </p>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* From */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground mb-2">
                <MapPin size={14} /> FROM
              </label>
              <Select value={from} onValueChange={setFrom}>
                <SelectTrigger className="bg-primary-foreground text-foreground border-0">
                  <SelectValue placeholder="Departure location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            {/* To */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground mb-2">
                <MapPin size={14} /> TO
              </label>
              <Select value={to} onValueChange={setTo}>
                <SelectTrigger className="bg-primary-foreground text-foreground border-0">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground mb-2">
                <Calendar size={14} /> TRAVEL DATE
              </label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-primary-foreground text-foreground border-0"
              />
            </div>

            {/* Passengers */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground mb-2">
                <Users size={14} /> PASSENGERS
              </label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="bg-primary-foreground text-foreground border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5,6].map(n => (
                    <SelectItem key={n} value={String(n)}>{n} passenger{n > 1 ? "s" : ""}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleBook}
            size="lg"
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base gap-2"
          >
            <MessageCircle size={18} /> Book via WhatsApp
          </Button>
        </div>

        {/* Call CTA */}
        <a
          href="tel:0733391352"
          className="inline-flex items-center gap-3 mt-8 bg-primary-foreground rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="bg-primary rounded-full p-2">
            <Phone size={20} className="text-primary-foreground" />
          </span>
          <span>
            <span className="text-xs font-semibold text-primary block">CALL US NOW</span>
            <span className="text-lg font-bold text-foreground">0733 391 352</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
