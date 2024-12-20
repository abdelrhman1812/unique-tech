"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ourMissionImg from "../../../../public/assets/about/pana.png";

const OurMission = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers once
    threshold: 0.2, // Animation triggers when 20% of the section is visible
  });

  return (
    <section
      ref={ref}
      className="container grid grid-cols-1 gap-y-5 py-20 md:grid-cols-2 md:gap-x-10 md:gap-y-0"
    >
      {/* Image with animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={ourMissionImg}
          alt="unique tech"
          priority
          loading="eager"
          width={517}
          height={517}
        />
      </motion.div>

      {/* Text content with animation */}
      <motion.div
        className="flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-[24px] font-bold text-black md:text-[28px] lg:text-[58px]">
          Our Mission
        </h2>
        <p className="text-[rgba(0, 0, 0, 0.99)] text-[14px] leading-[24px] md:text-[16px]">
          Our company aims to design and develop innovative solutions that meet
          the needs of our clients in the modern world of the internet and
          technology. We specialize in creating advanced websites, innovative
          mobile applications, and comprehensive e-commerce platforms that help
          businesses expand and grow in the digital market. Additionally, we
          develop smart dashboards that management of business and
          administrative operations. We always strive to deliver high-quality
          services, ensuring a smooth and impactful user experience, empowering
          our clients to engage effectively and sustainably with their audience
          and achieve their goals.
        </p>
      </motion.div>
    </section>
  );
};

export default OurMission;
