"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../../public/assets/heroImg.png";

const HeroImage = () => {
  return (
    <motion.div
      className="my-10 flex h-auto w-full justify-center md:my-0 md:w-[439px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        src={heroImg}
        alt="Unique Tech Hero Image"
        width={439}
        height={427}
        layout="intrinsic"
        loading="eager"
        priority
      />
    </motion.div>
  );
};

export default HeroImage;
