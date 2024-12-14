"use client";

import { motion } from "framer-motion";

const CollaborateContent = () => {
  return (
    <motion.div
      className="flex flex-col items-start gap-[30px] md:gap-[55px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-white text-[18px] leading-[28px] md:font-medium md:text-[22px] md:leading-[48px] lg:text-[32px] lg:leading-[60px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to turn your ideas into exceptional designs? Contact us today, and
        let`s make something amazing together!
      </motion.p>

      <motion.button
        className="bg-white w-[200px] h-[50px] md:w-[246px] md:h-[66px] rounded-[11px] text-lg md:text-xl lg:text-2xl font-bold"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        LET`S Talk
      </motion.button>
    </motion.div>
  );
};

export default CollaborateContent;
