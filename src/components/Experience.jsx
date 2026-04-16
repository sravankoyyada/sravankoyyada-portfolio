 import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../utils/AnimatedSection";

// const experiences = [
//   // keep your objects

  

// ];

// export default function Experience() {
//   return (
//     <AnimatedSection>
//       <section id="experience" className="mb-12">
//         <h3 className="text-2xl font-bold mb-6">Experience</h3>
//         <div className="space-y-4">
//           {experiences.map((e, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: idx * 0.08 }}
//               className="card-glass p-5 rounded-xl"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h4 className="text-lg font-semibold">{e.role}</h4>
//                   <p className="text-slate-400">{e.company}</p>
//                 </div>
//                 <div className="text-slate-400">{e.date}</div>
//               </div>
//               <ul className="list-disc ml-5 mt-3 text-slate-300">
//                 {e.details.map((d, i) => <li key={i}>{d}</li>)}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </AnimatedSection>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";
// import AnimatedSection from "../utils/AnimatedSection";

const experiences = [
  {
    role: "Project Associate - I",
    company: "CSIR- National Aerospace Laboratories (NAL), Bengaluru",
    date: "Oct 2025 - Present",
    details: [
      "Contributed to UAV-based agricultural solutions by applying computer vision and image processing Technologies for an agricultural technology mission - Region Specific Smart Agro-Technologies for Soil and Plant Health (RSSA).",
      "Machine learning models traing for Object detection, Tracking and feature extraction for UAV Captured high altitude Images and Videos.",
      "Utilizing Roboflow for dataset management, annotation, and preprocessing to streamline training workflows Annotated.",
      "Created training a dataset of 15,000+ images for Object Detection Model Traing and Fine-tuning.",
      "Having hands on experience in Spectral Images (Multispectral and Hyperspectral 6Bands & 240 Bands Respectively ) Processing Using Agisoft Metashape and Spectronon. ",
      "Generating Orthomosaic, NDVI & DEM For feature extraction and Agricultural Crop and soil analysis",
      "Training and optimizing models for enhanced UAV perception, target tracking, and autonomous navigation capabilities.",
    ],

  },
  {
    role: "Graduate Apprentice (GAPP)",
    company: "Bharat Electronics Limited (BEL), Bengaluru",
    date: "Aug 2025 – Oct 2025",
    details: [
      "Developed and enhanced a React-based application, utilizing component lifecycle methods, Context API, and Redux for efficient state management and scalable UI architecture.",
      "Designed and implemented responsive, high-performance user interfaces, improving usability and overall user experience.",
      "Built and integrated RESTful APIs using Node.js and Spring Boot, enabling seamless frontend-backend communication.",
      "Contributed to microservices-based development, collaborating on building modular, scalable, and maintainable backend services.",
    ],
  },

   {
    role: "Intern",
    company: "Hindustan Aeronautics Limited (HAL), Bengaluru",
    date: "May 2024 - july 2024",
    details: [
      "Designed and developed rich user interfaces using JavaFX (Scene Builder) for the Light Combat Helicopter (LCH) project, enhancing usability and system interaction.",
      "Contributed to UI development using Java and Spring Framework (Spring Boot, Spring MVC) to build scalable and maintainable applications.",
      "Developed and integrated RESTful APIs for seamless communication between frontend interfaces and backend services.",
      "Implemented backend logic and data handling to support aviation system visualization and control functionalities.",
    
    ],
  },

  // You can add more experience objects here
];

export default function Experience() {
  return (
    <AnimatedSection>
      <section id="experience" className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Experience</h3>
        <div className="space-y-4">
          {experiences.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="card-glass p-5 rounded-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{e.role}</h4>
                  <p className="text-slate-400">{e.company}</p>
                </div>
                <div className="text-slate-400">{e.date}</div>
              </div>
              <ul className="list-disc ml-5 mt-3 text-slate-300">
                {e.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}


