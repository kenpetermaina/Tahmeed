import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Contact Us
          </h1>
          <div className="space-y-6 text-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p>
                Have questions about our services or need assistance with booking? Fill out the form below and we'll get back to you.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p><strong>Phone:</strong> 0733 391 352</p>
                  <p><strong>Email:</strong> info@tahmeedexpress.com</p>
                  <p><strong>Address:</strong> Ground Floor, Zahra Building, River Rd, Nairobi</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Office Locations</h3>
                <div className="space-y-2">
                  <p><strong>Nairobi Office:</strong> Ground Floor, Zahra Building, River Rd</p>
                  <p><strong>Mombasa Office:</strong> Aswan Building</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;