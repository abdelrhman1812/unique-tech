"use client";

import { motion } from "framer-motion";

const ContactHead = () => {
  return (
    <motion.section
      className="mx-auto flex w-full flex-col items-center justify-center gap-[50px] md:w-[700px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h2
        className="text-[24px] font-bold leading-[36px] text-[#4f4f4f] sm:text-[28px] sm:leading-[50px] md:text-[32px] md:leading-[60px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Get In Touch Now
      </motion.h2>
      <motion.p
        className="text-[14px] font-medium leading-7 text-[#696A6A]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We value your feedback and are here to assist you. For any inquiries or
        comments, feel free to reach out to us via email or by filling out the
        form below. Our team will respond as soon as possible.
      </motion.p>
    </motion.section>
  );
};

export default ContactHead;
