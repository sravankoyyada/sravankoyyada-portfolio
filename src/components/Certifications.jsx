import React from "react";
import Carousel from "../reactbits/Carousel";
import Prism from "../reactbits/Prism"; // Optional background if you want it behind the carousel
import cert1 from "../assets/certifications/MajorProject_Basar.jpg";
import cert2 from "../assets/certifications/Mandal_TOP.jpg";
import cert3 from "../assets/certifications/District_2018.jpg";
import cert4 from "../assets/certifications/Mandal_2018.jpg";

export default function Certifications() {
  const images = [cert1, cert2, cert3,cert4];

  return (
    <section
      id="certifications"
      className="relative p-8 rounded-3xl overflow-hidden my-16"
    >
      {/* Optional animated Prism background */}
      <Prism
        backgroundColor="#0f172a"
        speed={0.6}
        size={180}
        opacity={0.35}
        colors={["#0ea5a4", "#7c3aed", "#38bdf8"]}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-3xl font-bold mb-6 text-accent">
          Certifications
        </h3>

        <Carousel
          slides={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Certification ${i + 1}`}
              className="max-h-96 rounded-xl shadow-lg object-contain"
            />
          ))}
          autoSlide
          interval={4000}
        />
      </div>
    </section>
  );
}
