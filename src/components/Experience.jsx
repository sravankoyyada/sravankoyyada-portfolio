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
      "Working in the UAV (Unmanned Aerial Vehicle) Division focusing on computer vision and image processing Technologies for an agricultural technology mission project involving the Rooted Soil Shear Apparatus (RSSA).",
      "YOLO Machine learning models traing for Object detection, Tracking and feature extraction for very high altitude Images and Videos.",
      "Utilizing Roboflow for dataset management, annotation, and preprocessing to streamline training workflows Annotated.",
      "Created training dataset of 5000+ images for ML model traing for Object detection.",
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
      "Worked on GUI development using C++ and Qt Creator for application interfaces.",
      "Contributed to software modules involving real-time data visualization and user interaction.",
      "Involved in front-end application development using React to enhance usability and performance.",
      "Gained hands-on experience in integrating desktop and web-based application workflows.",
    ],
  },

   {
    role: "Intern",
    company: "Hindustan Aeronautics Limited (HAL), Bengaluru",
    date: "May 2024 - july 2024",
    details: [
      "Worked on GUI design and development using JavaFX Scene Builder for the Light Combat Helicopter (LCH) project.",
      "Contributed to full-stack application development using Java, Spring Framework, and related technologies.",
      "Developed interactive interfaces and back-end integration for aviation system visualization and control.",
      "Collaborated with engineers to enhance user experience and improve system reliability for mission-critical operations.",
    
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


