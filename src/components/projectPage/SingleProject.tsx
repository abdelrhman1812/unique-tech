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
    type: string;
  };
};

const SingleProject = ({ project }: ProjectType) => {
  return (
    <motion.div
      className="overflow-hidden md:space-y-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          // className="w-full"
          src={project.imageCover}
          alt={project.title}
          width={588}
          height={472}
        />
      </motion.div>
      <motion.div
        className="p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      >
        {project.id !== 6 ? (
          <Link href={`/projects/${project.id}`}>
            <h2 className="mt-3 text-xl font-bold md:text-xl">
              {project.type} -
              <span className="font-normal text-black opacity-70">
                {" "}
                {project.title}
              </span>
            </h2>
          </Link>
        ) : (
          <Link href={`/projects`}>
            <h2 className="mt-3 text-xl font-bold md:text-xl">
              {project.type} -
              <span className="font-normal text-black opacity-70">
                {" "}
                {project.title}
              </span>
            </h2>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
