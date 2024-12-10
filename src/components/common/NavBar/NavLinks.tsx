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
    <div className="flex items-center justify-end">
      <MobileNav />
      <div className="hidden lg:flex h-[49px] items-center space-x-[50px] justify-end">
        <ul className="navbar-nav flex space-x-[50px]">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item relative group">
              <Link legacyBehavior href={link.path}>
                <a
                  className={`nav-link w-[53px] h-[22px] text-[18px] relative 
                    ${isActive(link.path) ? "text-black" : "text-grayMuted"}
                    transition-all duration-300 ease-in-out
                  `}
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-3 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-bgBtn w-[183px] h-[49px] font-bold text-white capitalize rounded hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default NavLinks;
