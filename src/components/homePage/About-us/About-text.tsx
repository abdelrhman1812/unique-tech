"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "../../../../public/assets/about/Vector.png";

const AboutText = () => {
  return (
    <motion.div
      className="grid place-content-center p-0 md:px-4"
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
          className="ml-auto hidden md:block"
          src={Arrow}
          alt="Arrow Decoration"
          width={271}
          height={79}
          loading="lazy"
        />
      </motion.div>

      <motion.h2
        className="mb-6 font-Poppins text-[28px] font-semibold leading-tight sm:text-[36px] md:text-[48px] lg:text-[58px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        About US
      </motion.h2>

      <motion.p
        className="text-[14px] font-medium leading-relaxed sm:text-[16px] md:text-[18px] lg:text-[20px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Unique tech is a software company, we develop custom built software for
        clients - covering everything from financial institutions & medical
        companies all the way to tech companies and government organizations.
      </motion.p>
    </motion.div>
  );
};

export default AboutText;
