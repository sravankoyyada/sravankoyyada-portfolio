// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import Prism from "./reactbits/Prism"; // 🌈 Global animated background
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
       
      <Prism
        backgroundColor="#0f172a"
        speed={0.45}
        size={240}
        opacity={0.5}
        colors={["#0ea5a4", "#7c3aed", "#38bdf8", "#9333ea"]}
        className="fixed inset-0 -z-20"
      />

       
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 -z-10" />

      {/* --- Main Page Content --- */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 z-10">
        {/* --- Header --- */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 text-center md:text-left"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
    Sravan Kumar Koyyada
  </h1>
  <p className="text-sm text-slate-400">
    Software Developer — AI · ML · Computer Vision · Python · Java · Web Development · Quantum Computing
  </p>
</div>


          <nav className="space-x-4 mt-4 md:mt-0 text-slate-300">
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </motion.header>

        {/* --- Main Sections --- */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          {/* <Certifications /> */}
          <Contact />
        </main>

        {/* --- Footer --- */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center text-slate-500 text-sm"
        >
          © {new Date().getFullYear()} Sravan Kumar Koyyada — Built with React +
          Tailwind + Framer Motion
        </motion.footer>
      </div>
    </div>
  );
}



 

