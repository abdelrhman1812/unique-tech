"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Links {
  id: number;
  title: string;
  path: string;
}

const FooterLinks = () => {
  const links: Links[] = [
    { id: 1, title: "HOME", path: "/" },
    { id: 2, title: "ABOUT", path: "/about" },
    { id: 3, title: "SERVICES", path: "/services" },
    { id: 4, title: "PROJECTS", path: "/projects" },
    { id: 5, title: "CONTACTS", path: "/contacts" },
  ];

  return (
    <motion.ul
      className="flex flex-wrap justify-center gap-4 md:gap-6 my-8 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
    >
      {links.map((link) => (
        <motion.li
          key={link.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link
            className="text-white text-[14px] md:text-[16px] font-medium hover:text-gray-400 transition duration-300"
            href={link.path}
          >
            {link.title}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default FooterLinks;
