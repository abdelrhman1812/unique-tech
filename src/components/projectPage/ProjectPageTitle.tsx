"use client";
import { motion } from "framer-motion";

const ProjectPageTitle = () => {
  return (
    <motion.section
      className="mx-auto w-full space-y-[25px] md:w-[1240px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="relative pb-4 font-pacifico text-[24px] sm:text-[28px] md:text-[40px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        Some Of Our Work
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-[5px] w-[95px] rounded-[30px] bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.h1>
      <motion.p
        className="text-[20px] font-medium text-black sm:text-[28px] md:text-[32px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
      >
        We envision a world where every idea, product, or service is brought to
        life through exceptional design.
      </motion.p>
    </motion.section>
  );
};

export default ProjectPageTitle;
