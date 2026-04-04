import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            About Tahmeed
          </h1>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              With a network covering all the top cities within the expansive East African region, Tahmeed Transporters is your number one bus company when it comes to comfortable, safe and affordable bus travel.
            </p>
            <p>
              With operations in Kenya, Uganda and Tanzania, the company has a fleet of over 50 luxurious and comfortable buses.
            </p>
            <p>
              We have been in operation for a decade and our service delivery improves with age. Our fleet is built to 5-star specifications and an experience defined by professionalism and punctuality.
            </p>
            <p>
              Our amazing line of luxury models buses with free WiFi, Electrical Charging Outlets, DVD players, reclining seats, air conditioned and flat screen TVs.
            </p>
            <p>
              Our mission is to provide excellent, safe, and reliable transportation to all our clients. We also provide charter buses for all occasions.
            </p>
            <p>
              No matter where you want to go or when you want to go there, the easiest way to get there is with us. If you have any questions regarding our company or services, please feel free to call or email us.
            </p>
            <p>
              Thank you for visiting our website and we look forward to handling your travel needs in near future.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
