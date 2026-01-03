// src/reactbits/Prism.jsx
import React, { useRef, useEffect, useState } from "react";

export default function Prism({
  backgroundColor = "#0f172a",
  colors = ["#0ea5a4", "#7c3aed", "#38bdf8"],
  opacity = 0.4,
  speed = 0.5,
  size = 200,
  className = "",
}) {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const draw = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);

      // Adjust animation based on both time and scroll position
      const t = Date.now() * 0.0001 * speed + scrollY * 0.0003;

      for (let i = 0; i < colors.length; i++) {
        const gradient = ctx.createRadialGradient(
          w / 2 + Math.sin(t + i * 2) * size,
          h / 2 + Math.cos(t + i * 2) * size,
          size * 0.1,
          w / 2,
          h / 2,
          size
        );
        gradient.addColorStop(0, `${colors[i]}${Math.floor(opacity * 255).toString(16)}`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundColor, colors, opacity, speed, size, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full h-full ${className}`}
    />
  );
}
