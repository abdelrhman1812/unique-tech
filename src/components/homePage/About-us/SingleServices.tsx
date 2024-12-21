"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SingleServiceProps = {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
};

const SingleServices = ({ service }: SingleServiceProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="space-y-8 border-b border-[#242424] px-2 py-5 md:border-0 md:p-8 lg:p-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mb-2 flex items-center gap-x-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className="flex h-[88px] w-[88px] items-center justify-center rounded-[10px] p-5"
          style={{
            background:
              "linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(15, 15, 15, 0.2) -68.25%, rgba(158, 255, 0, 0) 32.16%)",
          }}
        >
          <Image
            src={service.icon}
            alt={service.title}
            width={40}
            height={40}
            className="w-[25px] md:w-[40px]"
          />
        </div>

        <h3 className="font-Poppins text-[20px] font-medium text-white md:text-[26px]">
          {service.title}
        </h3>
      </motion.div>

      <motion.p
        className="font-Poppins text-[20px] leading-[30px] text-[#e6e6e6]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {service.description}
      </motion.p>
    </motion.div>
  );
};

export default SingleServices;
