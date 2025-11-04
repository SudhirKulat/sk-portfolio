import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ReadMoreProps {
  text: string;
  limit?: number;
}

export default function ReadMore({ text, limit = 150 }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text?.length > limit;
  const preview = isLong ? text.slice(0, limit) + "..." : text;

  return (
    <div className="text-gray-300 text-sm leading-relaxed">
      <AnimatePresence initial={false}>
        <motion.p
          key={expanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {expanded ? text : preview}
        </motion.p>
      </AnimatePresence>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 mb-2 text-xs font-semibold text-blue-400 hover:text-blue-300 focus:outline-none"
        >
          {expanded ? "See Less ▲" : "See More ▼"}
        </button>
      )}
    </div>
  );
}
