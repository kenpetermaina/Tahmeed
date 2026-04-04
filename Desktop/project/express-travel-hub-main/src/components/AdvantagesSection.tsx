import mpesaBadge from "@/assets/mpesa-badge.png";
import weCare from "@/assets/we-care.png";
import no1Badge from "@/assets/no1-badge.png";
import sleepingCoach from "@/assets/sleeping-coach.jpg";
import amenities from "@/assets/amenities.png";
import comfort from "@/assets/comfort.jpg";

const advantages = [
  {
    image: mpesaBadge,
    title: "Lipa Na Mpesa",
    desc: "Book from anywhere using MPesa, online booking, and multiple payment options for ultimate convenience.",
  },
  {
    image: weCare,
    title: "We Care",
    desc: "Most comfortable buses on Kenyan roads with ample legroom to ensure you reach your destination fully relaxed.",
  },
  {
    image: no1Badge,
    title: "No 1 Bus Countrywide",
    desc: "Leading public bus transporter in Kenya for 16 consecutive years with unmatched service excellence.",
  },
  {
    image: sleepingCoach,
    title: "Sleeping Coach",
    desc: "First sleeping coach in Eastern Africa with largest seats for luxurious overnight travel experience.",
  },
  {
    image: amenities,
    title: "Full Amenities",
    desc: "Air conditioning, high-speed WiFi, and power outlets to keep you connected and comfortable throughout your journey.",
  },
  {
    image: comfort,
    title: "Ultimate Comfort",
    desc: "Premium seating designed for maximum comfort with ergonomic support for short and long-distance travel.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Advantages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={adv.image}
                alt={adv.title}
                className="w-24 h-24 mx-auto mb-4 object-contain rounded-xl"
                loading="lazy"
                width={96}
                height={96}
              />
              <h3 className="text-lg font-bold text-foreground mb-2">{adv.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
