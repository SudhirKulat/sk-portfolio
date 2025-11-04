"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiSpring,
  SiRedux,
} from "react-icons/si";

const skills = [
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiReact, name: "React", color: "#61DBFB" },
  { icon: SiRedux, name: "Redux", color: "#3776AB" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiNodedotjs, name: "Node.js", color: "#68A063" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7E018" },
  { icon: SiHtml5, name: "HTML5", color: "#E44D26" },
  { icon: SiCss3, name: "CSS3", color: "#264DE4" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiSpring, name: "Spring", color: "#3776AB" },
];

const row1 = [...skills, ...skills];
const row2 = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className="section text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-primary">Skills</h2>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black via-transparent to-black opacity-70" />
        <div className="overflow-hidden mb-10">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {row1.map(({ icon: Icon, name, color }, i) => (
              <div
                key={`r1-${i}`}
                className="flex flex-col items-center justify-center min-w-[120px]"
              >
                <Icon
                  size={30}
                  style={{ color }}
                  className="hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                />
                <p className="text-gray-400 text-sm mt-2">{name}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {row2.map(({ icon: Icon, name, color }, i) => (
              <div
                key={`r2-${i}`}
                className="flex flex-col items-center justify-center min-w-[120px]"
              >
                <Icon
                  size={30}
                  style={{ color }}
                  className="hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                />
                <p className="text-gray-400 text-sm mt-2">{name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
