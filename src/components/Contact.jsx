 import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../utils/AnimatedSection";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <AnimatedSection>
      <section id="contact" className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glass p-6 rounded-xl">
            <h4 className="font-semibold">Contact Info</h4>
            <p className="text-slate-300 mt-2">+91 7680912116</p>
            <p className="text-slate-300 mt-2">sravankoyyada28@gmail.com</p>
          </div>

          <form
            className="card-glass p-6 rounded-xl"
            onSubmit={(e) => {
              e.preventDefault();
              // using mailto for now
              setSent(true);
              setTimeout(() => setSent(false), 2400);
              window.location.href = `mailto:sravankoyyada28@gmail.com?subject=Opportunity&body=Hi Sravan,`;
            }}
          >
            <label className="block text-sm text-slate-300">Name</label>
            <input required className="w-full mt-2 p-3 rounded-md bg-transparent border border-slate-700" placeholder="Your name" />

            <label className="block text-sm text-slate-300 mt-3">Email</label>
            <input required type="email" className="w-full mt-2 p-3 rounded-md bg-transparent border border-slate-700" placeholder="your@email.com" />

            <label className="block text-sm text-slate-300 mt-3">Message</label>
            <textarea required className="w-full mt-2 p-3 rounded-md bg-transparent border border-slate-700" rows="4" placeholder="Brief message" />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-primary to-accent text-white font-medium"
              type="submit"
            >
              {sent ? "Opening Mail…" : "Send"}
            </motion.button>
          </form>
        </div>
      </section>
    </AnimatedSection>
  );
}