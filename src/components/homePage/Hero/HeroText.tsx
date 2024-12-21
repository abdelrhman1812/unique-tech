"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroText = () => {
  return (
    <motion.div
      className="flex w-full flex-col md:w-[700px] md:flex-row md:space-x-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-[94px] py-[40px]">
        <motion.span
          className="block h-2 w-[94px] rounded bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        ></motion.span>
      </div>

      <div>
        <motion.h1
          className="mb-4 text-3xl font-bold leading-tight lg:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We make creative Things everyday!
        </motion.h1>
        <motion.p
          className="mb-6 text-[18px] text-gray-600 opacity-70 sm:text-[20px] md:text-[24px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Unique tech is where your imagination and our expertise converge to
          create design solutions that elevate your brand and set you apart from
          the competition.
        </motion.p>
        <Link href="/contact" passHref>
          <motion.button
            className="hover:bg-bgBtnHover flex h-[66px] w-[246px] items-center justify-center rounded-[11px] bg-bgBtn p-[10px] font-bold text-white transition sm:mx-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            LET’S TALK
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroText;
