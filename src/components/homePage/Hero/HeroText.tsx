"use client";

import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      className="w-full md:w-[700px] flex flex-col  md:flex-row md:space-x-6 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-[94px] py-[40px]">
        <motion.span
          className="w-[94px] h-2 rounded bg-black block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        ></motion.span>
      </div>

      <div>
        <motion.h1
          className="text-3xl  lg:text-4xl font-bold mb-4 leading-tight "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We make creative Things everyday!
        </motion.h1>
        <motion.p
          className="text-[18px] sm:text-[20px] md:text-[24px] text-gray-600 opacity-70 mb-6 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Unique tech is where your imagination and our expertise converge to
          create design solutions that elevate your brand and set you apart from
          the competition.
        </motion.p>
        <motion.button
          className="bg-bgBtn w-[246px] h-[66px] p-[10px] rounded-[11px] text-white font-bold hover:bg-bgBtnHover transition  sm:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          LET’S TALK
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroText;
