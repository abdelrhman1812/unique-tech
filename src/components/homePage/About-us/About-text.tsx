"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "../../../../public/assets/about/Vector.png";

const AboutText = () => {
  return (
    <motion.div
      className="grid place-content-center px-4"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="ml-auto"
          src={Arrow}
          alt="Arrow Decoration"
          width={271}
          height={79}
          loading="lazy"
        />
      </motion.div>

      <motion.h2
        className="font-Poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] leading-tight mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        About US
      </motion.h2>

      <motion.p
        className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-[500px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Concept Softworks is a software company. We develop custom-built
        software for clients, covering everything from financial institutions
        and medical companies to tech companies and government organizations.
      </motion.p>
    </motion.div>
  );
};

export default AboutText;
