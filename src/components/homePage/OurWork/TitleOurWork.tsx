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
        className="text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[36px] sm:leading-[50px] md:leading-[60px] max-w-full"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some Of Our Work
        <br />
        <span className="font-medium text-[20px] sm:text-[28px] md:text-[32px]">
          We envision a world where every idea, product, or service is brought
          to life through exceptional design.
        </span>
      </motion.h2>
    </motion.section>
  );
};

export default TitleOurWork;
