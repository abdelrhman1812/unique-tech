"use client";

import { motion } from "framer-motion";

const FooterHead = () => {
  return (
    <motion.div
      className="text-center px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="font-serif font-bold text-3xl md:text-4xl text-white">
        UNIQUE TECH.
      </h2>
      <p className="w-full max-w-[805px] mx-auto my-4 font-Poppins text-[14px] md:text-[16px] leading-relaxed text-[rgba(255, 255, 255, 0.99)]">
        Unique Tech is where your imagination and our expertise converge to
        create design solutions that elevate your brand and set you apart from
        the competition.
      </p>
    </motion.div>
  );
};

export default FooterHead;
