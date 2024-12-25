"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { scroller } from "react-scroll";

interface Links {
  id: number;
  title: string;
  path: string;
}

const FooterLinks = () => {
  const router = useRouter();

  const links: Links[] = [
    { id: 1, title: "HOME", path: "/" },
    { id: 2, title: "ABOUT", path: "/about" },
    { id: 3, title: "SERVICES", path: "/#services" },
    { id: 4, title: "PROJECTS", path: "/projects" },
    { id: 5, title: "CONTACT US", path: "/contact" },
  ];

  const handleLinkClick = (path: string) => {
    if (path.includes("#services")) {
      if (window.location.pathname === "/") {
        // Scroll directly if on home page
        scroller.scrollTo("services", {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      } else {
        // Navigate to home and scroll
        router.push("/");
        setTimeout(() => {
          scroller.scrollTo("services", {
            smooth: true,
            duration: 500,
            offset: -50,
          });
        }, 100);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <motion.ul
      className="my-8 flex flex-wrap justify-center gap-4 px-4 md:gap-6"
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
          {link.path.includes("#services") ? (
            <button
              onClick={() => handleLinkClick(link.path)}
              className="cursor-pointer text-[14px] font-medium text-white transition duration-300 hover:text-gray-400 md:text-[16px]"
            >
              {link.title}
            </button>
          ) : (
            <button
              className="text-[14px] font-medium text-white transition duration-300 hover:text-gray-400 md:text-[16px]"
              onClick={() => handleLinkClick(link.path)}
            >
              {link.title}
            </button>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default FooterLinks;
