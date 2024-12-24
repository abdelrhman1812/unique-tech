"use client";

import { motion } from "framer-motion";

const CollaborateHead = () => {
  return (
    <motion.div
      className="w-full py-5 text-start md:w-[200px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="w-fll text-[18px] font-normal text-white md:w-[200px] md:text-[24px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let’s Collaborate
      </motion.h2>
    </motion.div>
  );
};

export default CollaborateHead;
