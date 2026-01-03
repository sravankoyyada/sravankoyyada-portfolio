// src/reactbits/Carousel.jsx
import React, { useState, useEffect } from "react";

export default function Carousel({
  slides = [],
  autoSlide = true,
  interval = 3000,
}) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, interval);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

