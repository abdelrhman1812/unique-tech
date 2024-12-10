"use client";

import { motion } from "framer-motion";

const TitleOurWork = () => {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl font-bold leading-[40px] md:leading-[60px] max-w-full"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some Of Our Work <br />
        We envision a world where every idea, product, or service is <br />{" "}
        brought to life through exceptional design.
      </motion.h2>
    </motion.section>
  );
};

export default TitleOurWork;
