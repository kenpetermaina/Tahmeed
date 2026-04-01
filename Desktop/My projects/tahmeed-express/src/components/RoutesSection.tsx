import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import routeKampala from "@/assets/route-kampala.jpg";
import routeDar from "@/assets/route-dar.jpg";
import routeMombasa from "@/assets/route-mombasa.jpg";
import routeArusha from "@/assets/route-arusha.jpg";
import routeKisumu from "@/assets/route-kisumu.jpg";
import routeNairobi from "@/assets/route-nairobi.jpg";

const routes = [
  { name: "Tuvuke Boarder Kampala", freq: "Daily", status: "Available Now", hours: 12, price: "KSH 2,500", img: routeKampala },
  { name: "Dar es Salaam Mpo", freq: "Daily", status: "Available Now", hours: 8, price: "KSH 1,800", img: routeDar },
  { name: "Mombasa Hoye", freq: "Multiple Daily", status: "Available Now", hours: 7, price: "KSH 1,200", img: routeMombasa },
  { name: "Twende Arusha", freq: "3x Weekly", status: "Limited Seats", hours: 14, price: "KSH 3,200", img: routeArusha },
  { name: "Kisumu Dala", freq: "Daily", status: "Available Now", hours: 6, price: "KSH 1,000", img: routeKisumu },
  { name: "Nairobi Tuko Poa", freq: "Daily", status: "Available Now", hours: 5, price: "KSH 1,500", img: routeNairobi },
];

const RoutesSection = () => {
  const handleBook = (routeName) => {
    const msg = `Hello! I'd like to book a ticket for ${routeName}.`;
    window.location.href = `https://wa.me/254733391352?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
        Popular Routes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((r) => (
          <div key={r.name} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border group">
            <div className="relative h-48 overflow-hidden">
              <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={640} height={640} />
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {r.freq}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">{r.name}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span className={r.status === "Limited Seats" ? "text-destructive font-medium" : "text-primary font-medium"}>
                  {r.status}
                </span>
                <span className="flex items-center gap-1"><Clock size={14} /> {r.hours} hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">{r.price}</span>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-orange-deep" onClick={() => handleBook(r.name)}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RoutesSection;
