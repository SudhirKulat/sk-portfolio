import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    company: "CDAC",
    role: "Advance computing",
    period: "2016 – 2017",
    place: "Nagpur | Maharashtra",
  },
  {
    company: "Pune University",
    role: "B.E. Electrical Engineering, Pune",
    place: "Pune | Maharashtra",
    period: "2010 – 2014",
  },
  {
    company: "Residential Jr. college",
    place: "Ahmednagar | Maharashtra",
    role: "High school and Jr. college",
    period: "2008 – 2010",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 pt-2 text-gray-200 font-mono">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-gray-700">
          {education.map((ed, index) => (
            <motion.div
              key={ed.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              <span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-gray-900 border border-gray-600 rounded-full Z-1">
                <GraduationCap className="w-3 h-3 text-gray-400" />
              </span>

              <div className="bg-[#0e0e0e]/70 backdrop-blur-md border border-gray-800 hover:border-gray-600 rounded-xl p-5 transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-[#2AB5B5]">
                    {ed?.company}
                  </h3>
                  <span className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" /> {ed.period}
                  </span>
                </div>
                <h5 className="text-xm font-semibold text-white">
                  {ed?.place}
                </h5>
                <p className="text-gray-400 text-sm mb-3">{ed?.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
