import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../utils/AnimatedSection";

const skillCategories = [
  {
    title: "AI / ML",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Computer Vision", level: 80 },
      { name: "Image Processing", level: 75 },
      { name: "YOLOv5 / YOLOv8", level: 70 },
      { name: "TensorFlow / PyTorch", level: 75 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
  title: "Backend",
  skills: [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Django", level: 80 },
    { name: "Microservices", level: 75 },
    { name: "MySQL", level: 80 },
  ],
},
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5 / CSS / JavaScript", level: 85 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Azure", level: 75 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ", level: 85 },
      { name: "Roboflow", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="mb-16">
        <h3 className="text-3xl font-bold mb-8 tracking-wide">
          Skills & Expertise
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: cIdx * 0.2 }}
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                {category.title}
              </h4>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: idx * 0.1,
                          type: "spring",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Tools Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-slate-400 text-center"
        >
          Additional Tools: Agisoft Metashape, SceneBuilder, QT Creator,
          SolidWorks
        </motion.div>
      </section>
    </AnimatedSection>
  );
}