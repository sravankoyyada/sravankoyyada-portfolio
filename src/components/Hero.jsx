// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "../utils/AnimatedSection";
import profileImage from "../assets/sravan1.png"; // make sure this file exists
import Prism from "../reactbits/Prism"; //  animated background component

export default function Hero() {
  return (
    <>
      {/* --- Hero Section with Animated Background --- */}
      <section className="relative grid md:grid-cols-[70%_30%] gap-8 items-center mb-12 overflow-hidden rounded-3xl">
         
        <Prism
          backgroundColor="#0f172a"
          speed={0.6}
          size={220}
          opacity={0.5}
          colors={["#0ea5a4", "#7c3aed", "#38bdf8", "#9333ea"]}
          className="absolute inset-0 -z-10"
        />

         
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="card-glass p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center"
        >
          <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
            <span>Hi, I'm Sravan</span>
            <span className="text-slate-100 text-4xl">👋</span>
          </h2>

          <p className="text-slate-300 mb-6 leading-relaxed">
            A passionate Software Developer with hands-on experience in building
            user interfaces for aerospace and defense projects. Proficient in
            Computer Vision and AI/ML technologies for model training and feature
            extraction, with research experience in optimization using D-Wave
            quantum annealing. Skilled in developing scalable full-stack UI
            modules that integrate intelligence, performance, and innovation.
          </p>

          <div className="flex gap-3">
            <a
              className="px-5 py-2 rounded-md bg-primary text-slate-900 font-medium hover:shadow-glow transition"
              href="mailto:sravankoyyada28@gmail.com"
            >
              Contact Me
            </a>
            <a
              href={`${import.meta.env.BASE_URL}/SravanKoyyada_Resume_Updated (2).pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md border border-slate-700 hover:border-primary transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/sravankoyyada?tab=repositories"
              aria-label="github"
              className="p-2 rounded-md hover:bg-slate-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://in.linkedin.com/in/koyyada-sravan-kumar-141360210"
              aria-label="linkedin"
              className="p-2 rounded-md hover:bg-slate-800 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* --- Right Section: Profile Image --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-center h-full"
        >
          <img
            src={profileImage}
            alt="Sravan Kumar Koyyada"
            className="w-72 h-72 rounded-full object-cover shadow-[0_0_25px_rgba(56,189,248,0.6)] border-4 border-accent"
          />
        </motion.div>
      </section>

      {/* --- Quick Facts Section Below --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="card-glass p-8 rounded-2xl shadow-lg mb-16"
      >
        <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
        <ul className="space-y-2 text-slate-300">
          <li>
            <strong>Location : </strong> Hyderabad, India
          </li>
          <li>
            <strong>Education : </strong> B.Tech, CSE — RGUIIIT Basar (2021–2025)
          </li>
          <li>
            <strong>Open to : </strong> Software Developer, AI ML Engineer,
            Computer Vision Engineer
          </li>
          <li>
            <strong>Interests : </strong> AI, ML, Deep Learning, LLMs, Quantum
            Computing, Web Development
          </li>
        </ul>
      </motion.div>
    </>
  );
}








