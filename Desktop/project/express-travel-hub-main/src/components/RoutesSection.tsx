import routeKampala from "@/assets/route-kampala.jpg";
import routeDar from "@/assets/route-dar.jpg";
import routeMombasa from "@/assets/route-mombasa.jpg";
import routeArusha from "@/assets/route-arusha.jpg";
import routeKisumu from "@/assets/route-kisumu.jpg";
import routeNairobi from "@/assets/route-nairobi.jpg";
import { Clock, CheckCircle } from "lucide-react";

const routes = [
  { image: routeKampala, freq: "Daily", from: "Nairobi", to: "Kampala", status: "Available Now", duration: "12 hours", price: "KSH 2,500" },
  { image: routeDar, freq: "Daily", from: "Mombasa", to: "Dar es Salaam", status: "Available Now", duration: "8 hours", price: "KSH 2,000" },
  { image: routeMombasa, freq: "Multiple Daily", from: "Nairobi", to: "Mombasa", status: "Available Now", duration: "7 hours", price: "KSH 1,800" },
  { image: routeArusha, freq: "3x Weekly", from: "Kampala", to: "Arusha", status: "Limited Seats", duration: "14 hours", price: "KSH 3,200" },
  { image: routeKisumu, freq: "Daily", from: "Nairobi", to: "Kisumu", status: "Available Now", duration: "6 hours", price: "KSH 1,400" },
  { image: routeNairobi, freq: "Daily", from: "Arusha", to: "Nairobi", status: "Available Now", duration: "5 hours", price: "KSH 1,500" },
];

const RoutesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Popular Routes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={`${route.from}-${route.to}`}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {route.freq}
                </span>
              </div>
              <div className="p-5">
                <div className="text-sm text-muted-foreground mb-1"><span className="font-semibold text-foreground">From</span> {route.from}</div>
                <div className="text-sm text-muted-foreground mb-2"><span className="font-semibold text-foreground">To</span> {route.to}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <CheckCircle size={14} className="text-primary" />
                  {route.status}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock size={14} className="text-primary" />
                  {route.duration}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-extrabold text-primary">{route.price}</span>
                  <button
                    onClick={() => {
                      const message = `Hello Tahmeed Express! I'd like to book:\nFrom: ${route.from}\nTo: ${route.to}\nPrice: ${route.price}\nPlease confirm availability.`;
                      window.open(`https://wa.me/254733391352?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutesSection;
