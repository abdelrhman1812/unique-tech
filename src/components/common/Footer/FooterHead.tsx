"use client";

import { motion } from "framer-motion";

const FooterHead = () => {
  return (
    <motion.div
      className="px-4 text-center md:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
        UNIQUE TECH.
      </h2>
      <p className="mx-auto my-4 w-full max-w-[805px] font-Poppins text-[14px] leading-relaxed text-white md:text-[16px]">
        Unique Tech is where your imagination and our expertise converge to
        create design solutions that elevate your brand and set you apart from
        the competition.
      </p>
    </motion.div>
  );
};

export default FooterHead;
