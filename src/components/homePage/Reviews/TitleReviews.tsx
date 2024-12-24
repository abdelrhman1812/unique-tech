"use client";

import { motion } from "framer-motion";

const TitleReviews = () => {
  return (
    <motion.div
      className="border-b border-b-black p-1 py-[120px] text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="mb-6 font-pacifico text-[28px] font-semibold leading-tight text-white sm:text-[36px] md:text-[48px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        What our Clients say About us
      </motion.h2>

      <motion.p
        className="mx-auto w-full max-w-[840px] font-Poppins text-[12px] font-normal leading-7 text-[#E6E6E6] md:text-[18px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        At Unique Tech, we take pride in delivering exceptional digital products
        and services that drive success for our clients. Here`s what some of our
        satisfied clients have to say about their experience working with us
      </motion.p>
    </motion.div>
  );
};

export default TitleReviews;
