"use client";

import { motion } from "framer-motion";

const ServicesHead = () => {
  return (
    <motion.div
      className="w-[200px] py-5 text-start md:text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-white w-[200px] h-[27px] py-[30px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
    </motion.div>
  );
};

export default ServicesHead;
