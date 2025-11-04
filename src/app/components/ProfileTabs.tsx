"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import useTypingEffect from "@/hooks/useTypingEffect";
import Experience from "./Experience";
import Blogs from "./Blogs";
import Education from "./Education";
import About from "./About";
const tabs = ["About Me", "Experience", "Education", "Blogs"];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("About Me");
  const typedName = useTypingEffect("Sudhir Kulat", 120);

  const renderContent = () => {
    switch (activeTab) {
      case "About Me":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Blogs":
        return <Blogs />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="section text-center mt-10">
      <motion.div
        className="flex flex-col items-center justify-center gap-5 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="/profile.jpeg"
          alt="Sudhir Kulat"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary shadow-lg object-cover"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

 
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {typedName}
          <motion.span
            className="inline-block w-[2px] h-7 bg-primary ml-1 animate-pulse"
            key={typedName.length}
          />
        </motion.h1>


        <div className="flex items-center justify-center gap-6 text-2xl text-gray-400 mt-3">
          <a
            href="mailto:sudhir.kulat@gmail.com"
            className="hover:text-primary transition-colors"
            aria-label="Email"
            style={{ color: "white" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/SudhirKulat"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
            style={{ color: "white" }}
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/sudhir-kulat007"
            target="_blank"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
            style={{ color: "white" }}
          >
            <FaLinkedin />
          </a>
        </div>

        <motion.p
          className="text-white-400 mt-3 mb-0 flex items-center justify-center gap-2 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaMapMarkerAlt className="text-primary" />
          Pune | India
        </motion.p>
      </motion.div>

      <nav className="mb-6 flex justify-center gap-8 border-b border-gray-800 pb-3 mb-nav">
        {tabs.map((tab) => (
          <a
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer relative text-xl font-medium transition-colors ${
              activeTab === tab
                ? "text-primary"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-[-3px] h-[2px] w-full bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </a>
        ))}
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-left"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
