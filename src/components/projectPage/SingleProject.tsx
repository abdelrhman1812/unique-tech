"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectType = {
  project: {
    id: number;
    image: StaticImageData;
    title: string;
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
        className="overflow-hidden rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          className="w-full rounded-lg"
          src={project.image}
          alt={project.title}
          width={608}
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
        <Link href={`/projects/${project.id}`}>
          <h2 className="text-xl font-bold md:text-xl">
            {project.title.split(" ").slice(0, 2).join(" ")}
            <span className="font-normal text-black opacity-70">
              {" " + project.title.split(" ").slice(2).join(" ")}
            </span>
          </h2>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
