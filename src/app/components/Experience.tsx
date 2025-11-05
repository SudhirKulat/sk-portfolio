"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Globant",
    role: "Senior Web UI Developer",
    period: "APR 2022 – Present",
    description:
      "Leading the UI team, building scalable web apps with React, Next.js, and Tailwind. Focused on performance optimization and developer experience.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    company: "Ephasis",
    role: "Senior Software Engineer",
    period: "FEB 2021 – MAR 2022",
    description:
      "Developed data-driven dashboards and internal tools for enterprise clients. Implemented reusable component systems and improved UX consistency.",
    tech: ["React", "Redux", "SASS", "Chart.js"],
  },
  {
    company: "Springer Nature",
    role: "Fullstack developer",
    period: "MAR 2017 – JAN 2021",
    description:
      "Built and maintained responsive UI for multiple client-facing projects. Collaborated with designers to bring high-fidelity prototypes to life.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "Spring Boot"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 pt-2 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-gray-900 border border-gray-600 rounded-full">
                <Briefcase className="w-3 h-3 text-gray-400" />
              </span>

              <div className="bg-[#0e0e0e]/70 backdrop-blur-md border border-gray-800 hover:border-gray-600 rounded-xl p-5 transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#2AB5B5]">
                    {exp.company}
                  </h3>
                  <span className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" /> {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{exp.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
