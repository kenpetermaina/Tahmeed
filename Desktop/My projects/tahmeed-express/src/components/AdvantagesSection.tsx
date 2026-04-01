import { Smartphone, Heart, Trophy, BedDouble, Wifi, Armchair } from "lucide-react";

const advantages = [
  {
    icon: Smartphone,
    title: "Lipa Na Mpesa",
    desc: "Book from anywhere using MPesa, online booking, and multiple payment options for ultimate convenience.",
  },
  {
    icon: Heart,
    title: "We Care",
    desc: "Most comfortable buses on Kenyan roads with ample legroom to ensure you reach your destination fully relaxed.",
  },
  {
    icon: Trophy,
    title: "No 1 Bus Countrywide",
    desc: "Leading public bus transporter in Kenya for 16 consecutive years with unmatched service excellence.",
  },
  {
    icon: BedDouble,
    title: "Sleeping Coach",
    desc: "First sleeping coach in Eastern Africa with largest seats for luxurious overnight travel experience.",
  },
  {
    icon: Wifi,
    title: "Full Amenities",
    desc: "Air conditioning, high-speed WiFi, and power outlets to keep you connected and comfortable throughout your journey.",
  },
  {
    icon: Armchair,
    title: "Ultimate Comfort",
    desc: "Premium seating designed for maximum comfort with ergonomic support for short and long-distance travel.",
  },
];

const AdvantagesSection = () => (
  <section id="advantages" className="py-20 bg-surface-warm">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
        Our Advantages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((a) => (
          <div
            key={a.title}
            className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
              <a.icon size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{a.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
