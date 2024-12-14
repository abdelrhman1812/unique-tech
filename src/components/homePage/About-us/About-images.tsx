"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import bottomRightImg from "../../../../public/assets/about/bottomRight.png";
import leftImg from "../../../../public/assets/about/left.png";
import topRightImg from "../../../../public/assets/about/topRight.png";

const AboutImages = () => {
  return (
    <motion.div
      className="flex gap-4 items-center w-full md:w-[500px] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Left Image */}
      <motion.div
        className="w-full overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 2 }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={leftImg}
          alt="Hero Image"
          width={288}
          height={333}
          className="rounded-lg object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="flex flex-col gap-4 w-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="overflow-hidden"
          whileHover={{ scale: 1.1, rotate: -2 }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={topRightImg}
            alt="Hero Image"
            width={288.9}
            height={292}
            className="rounded-lg object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={bottomRightImg}
            alt="Hero Image"
            width={288.9}
            height={132}
            className="rounded-lg object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutImages;
