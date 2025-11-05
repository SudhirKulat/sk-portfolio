import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <section id="blogs">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Blogs
        </motion.h2>
        <motion.div
          key="blogs"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 ml-6 relative"
        >
          <div className="space-y-3 text-gray-300">
            <p>📝 Coming soon: “Optimizing React with Suspense”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
