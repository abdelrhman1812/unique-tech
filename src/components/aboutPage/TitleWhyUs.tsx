"use client";

import { motion } from "framer-motion";

const TitleWhyUs = () => {
  return (
    <motion.div
      className="border-b border-b-[#00000033] py-[120px] text-center"
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
        Why Choose Unique Tech?
      </motion.h2>

      <motion.p
        className="mx-auto w-full max-w-[840px] font-Poppins text-[18px] font-normal leading-7 text-[#E6E6E6]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Experience excellence in digital craftsmanship with our team of skilled
        professionals dedicated to delivering exceptional results.
      </motion.p>
    </motion.div>
  );
};

export default TitleWhyUs;
