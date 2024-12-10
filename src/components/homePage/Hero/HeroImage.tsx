"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../../public/assets/heroImg.png";

const HeroImage = () => {
  return (
    <motion.div
      className="w-full md:w-[439px] h-auto flex justify-center my-10 md:my-0"
      initial={{ opacity: 0, y: 50 }} // الحركة الأولية
      animate={{ opacity: 1, y: 0 }} // الحركة النهائية
      transition={{ duration: 1, ease: "easeOut" }} // وقت الحركة
    >
      <Image
        src={heroImg}
        alt="Unique Tech Hero Image"
        width={439}
        height={427}
        layout="intrinsic"
      />
    </motion.div>
  );
};

export default HeroImage;
