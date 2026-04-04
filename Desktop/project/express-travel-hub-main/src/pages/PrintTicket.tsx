import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const PrintTicket = () => {
  const [formData, setFormData] = useState({
    ticketNumber: "",
    countryCode: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket printing logic here
    console.log("Print ticket request:", formData);
    alert(`Ticket printing requested for:\nTicket: ${formData.ticketNumber}\nPhone: ${formData.countryCode} ${formData.phone}`);
    // In a real app, this would send to backend or open print dialog
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Print Your Ticket
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Enter your ticket details below to print your ticket.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="ticketNumber" className="block text-sm font-medium text-foreground mb-2">
                Ticket Number
              </label>
              <input
                type="text"
                id="ticketNumber"
                name="ticketNumber"
                value={formData.ticketNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your ticket number"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="countryCode" className="block text-sm font-medium text-foreground mb-2">
                  Country Code
                </label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select</option>
                  <option value="+254">+254 (Kenya)</option>
                  <option value="+255">+255 (Tanzania)</option>
                  <option value="+256">+256 (Uganda)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Print Ticket
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrintTicket;