import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../utils/AnimatedSection";

const projects = [
  {
    title: "Leveraging D-Wave Quantum Annealing for Optimization Solutions",
    desc: "Explored quantum annealing techniques using D-Wave systems to enhance machine learning optimization tasks such as hyperparameter tuning, feature selection, and clustering. Integrated classical ML algorithms (SVM, K-Means) with quantum annealing to achieve faster optimization and improved computational efficiency.",
    tags: ["Python", "D-Wave Ocean SDK", "Quantum Computing", "Scikit-learn", "Machine Learning"],
    link: "https://github.com/sravankoyyada/Quantum_Computing_D-wave_major_project", // 🔗 Replace with your actual repo link
  },
  {
    
  title: "Personal Portfolio Website (React + Tailwind CSS)",
  desc: " Designed and developed a modern, responsive personal portfolio website using React.js and Tailwind CSS to showcase projects, technical skills, and professional experience. Implemented a component-based architecture, reusable UI components, and smooth animations with Framer Motion to enhance user experience and engagement. Integrated advanced UI features including custom project cards, animated sections, image carousels, and dynamic backgrounds, ensuring high performance, scalability, and cross-device compatibility.",
  tags: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Responsive Design"],
  link: "https://in.linkedin.com/in/koyyada-sravan-kumar-141360210"


  },
  // {
  //   title: "Credit Card Usage Analysis (React + .NET Full Stack App)",
  //   desc: "Developed a full-stack web application to analyze and visualize client credit card expenditure patterns. Implemented React.js frontend with .NET Web API backend and integrated Recharts visualizations for interactive, category-wise insights and data analytics.",
  //   tags: ["React.js", ".NET Core", "C#", "Recharts", "REST API", "SQL Server"],
  //   link: "https://github.com/yourusername/credit-card-usage-analysis", // 🔗 Replace with your actual repo link
  // },
  {
    title: "High-Altitude UAV Object Detection and Tracking using YOLO-Based Deep Learning Models ",
    desc: "Designed and curated a custom computer vision dataset comprising 9,000+ annotated UAV images using Roboflow. Trained and fine-tuned a YOLOv8 model on Google Colab GPUs for real-time object detection, achieving high accuracy on aerial imagery captured by UAVs(Unmanned Aerial Vehicle) from ~2 km altitude through optimized preprocessing and inference pipelines.",
    tags: ["Python", "YOLOv8", "Ultralytics YOLOv 12&13", "OpenCV", "Roboflow", "CVAT", "PyTorch"],
    link: "https://drive.google.com/drive/folders/1miip6vqbzotmAt9ZUxJnAv94uW3HztY9?usp=sharing", // optional, replace if available
  },
];

export default function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="mb-12">
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="card-glass p-5 rounded-xl shadow hover:shadow-glow-md transition transform"
            >
              <h4 className="font-semibold text-lg text-accent">{p.title}</h4>
              <p className="text-slate-300 text-sm my-3 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md bg-slate-800/60 text-xs text-slate-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-medium bg-gradient-to-r from-primary to-accent text-slate-900 hover:shadow-glow transition">
                  View →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
