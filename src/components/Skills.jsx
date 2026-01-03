import React from "react";
import { motion } from "framer-motion";
//import AnimatedSection from "../utils/AnimatedSection";
import AnimatedSection from "../utils/AnimatedSection";

 
const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 90 },
  { name: "C/C++", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "Image Processing", level: 75 },
  { name: "Pattern Recognition", level: 70 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "Artificial Intelligence(AI) & LLMs", level: 75 },
  { name: "YOLOv5 / YOLOv8", level: 70 },
  { name: "TensorFlow / Keras / PyTorch", level: 75 },
  { name: "OpenCV", level: 80 },
  { name: "Scikit-learn", level: 75 },
  { name: "Pandas / NumPy", level: 85 },
  { name: "Matplotlib / Seaborn", level: 75 },
  { name: "React.js, HTML5, CSS, Javascript", level: 80 }, 
  { name: "Git / GitHub", level: 80 },
];






export default function Skills() {
  return (
    <AnimatedSection>
      <section id="skills" className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Skills & Tools</h3>
        <div className="card-glass p-5 rounded-xl">
          <div className="space-y-4">
            {skills.map((s, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm">
                  <div>{s.name}</div>
                  <div className="text-slate-400">{s.level}%</div>
                </div>
                <div className="progress-bg">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 0.9, delay: idx * 0.12 }}
                    style={{ boxShadow: "0 6px 18px rgba(7,89,100,0.08)" }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-4 text-sm text-slate-400">Softwares & Tools: Agisoft Metashape, GitHub, MySQL, VS Code, IntelliJ, SceneBuilder,QT Creater, Roboflow, Solid Works</div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}