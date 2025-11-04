import { motion } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";

export default function About() {
  return (
    <div className="space-y-12">
      <p className="text-gray-300 leading-relaxed text-lg">
        Hi, I’m <span className="font-semibold">Sudhir Kulat</span> — a
        passionate
        <strong> Full Stack Developer</strong> specializing in building dynamic,
        high-performance web applications using <strong>Next.js</strong>,{" "}
        <strong>React</strong>, and <strong>Node.js</strong>. I love creating
        user-centric experiences with attention to detail and performance.
      </p>
      <Skills />
      <div className="section">
        <Projects />
      </div>
    </div>
  );
}
