"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        className="text-[18px] leading-[28px] text-white md:text-[22px] md:font-medium md:leading-[48px] lg:text-[32px] lg:leading-[60px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to turn your ideas into exceptional designs? Contact us today, and
        let`s make something amazing together!
      </motion.p>

      <Link href="/contact" passHref>
        <motion.button
          className="flex h-[50px] w-[200px] items-center justify-center rounded-[11px] bg-white text-lg font-bold md:h-[66px] md:w-[246px] md:text-xl lg:text-2xl"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          LET`S Talk
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CollaborateContent;
