"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectType = {
  project: {
    id: number;
    title: string;
    description: string;
    images: (StaticImageData | string)[];
    imageCover: StaticImageData | string;
    links: string;
  };
};

const SingleProject = ({ project }: ProjectType) => {
  return (
    <motion.div
      className="space-y-4 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="relative h-[472px] w-full overflow-hidden md:w-[608px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          className="w-full object-cover"
          src={project.imageCover}
          alt={project.title}
          fill
        />
      </motion.div>
      <motion.div
        className="p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      >
        <Link href={`/projects/${project.id}`}>
          <h2 className="mt-3 text-xl font-bold md:text-xl">
            WEBSITE -
            <span className="font-normal text-black opacity-70">
              {" "}
              {project.title}
            </span>
          </h2>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
