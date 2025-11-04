import { motion } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";

export default function About() {
  return (
    <section id="aboutme" className="py-20 pb-0 pt-2 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto px-6"></div>
      <div className="space-y-12">
        <p className="text-gray-300 leading-relaxed text-lg abt-mb">
          Hi, I’m <span className="font-semibold">Sudhir Kulat</span> — a
          passionate
          <strong> Full Stack Developer</strong> specializing in building
          dynamic, high-performance web applications using{" "}
          <strong>Next.js</strong>, <strong>React</strong>, and{" "}
          <strong>Node.js</strong>. I love creating user-centric experiences
          with attention to detail and performance.
        </p>
        <Skills />
        <div className="section">
          <Projects />
        </div>
      </div>
    </section>
  );
}
