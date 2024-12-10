"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex items-center justify-end ">
      <MobileNav />
      <div className=" hidden lg:flex h-[49px]  items-center space-x-[50px] justify-end ">
        <ul className="navbar-nav flex space-x-[50px]  ">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <Link legacyBehavior href={link.path}>
                <a
                  className={`nav-link w-[53px] h-[22px] text-[18px] relative 
        ${isActive(link.path) ? "text-black" : "text-grayMuted"}
        before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 
        before:h-[2px] before:bg-black hover:before:w-full transition-all duration-300 ease-in-out
      `}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-bgBtn w-[183px] h-[49px] font-bold text-white capitalize rounded"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
