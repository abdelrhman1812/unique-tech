"use client";

import { motion } from "framer-motion";

const TitleReviews = () => {
  return (
    <motion.div
      className="text-center py-[120px] border-b border-b-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="font-pacifico text-white font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-tight mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        What our Clients say About us
      </motion.h2>

      <motion.p
        className="font-Poppins w-full max-w-[840px] mx-auto text-[#E6E6E6] text-[18px] leading-7 font-normal"
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
