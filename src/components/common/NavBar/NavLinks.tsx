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
      name: "Services",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex items-center justify-end">
      <MobileNav />
      <div className="hidden h-[49px] items-center justify-end space-x-[50px] lg:flex">
        <ul className="navbar-nav flex space-x-[50px]">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item group relative">
              <Link legacyBehavior href={link.path}>
                <a
                  className={`nav-link relative h-[22px] w-[53px] text-[18px] ${isActive(link.path) ? "text-black" : "text-grayMuted"} transition-all duration-300 ease-in-out`}
                >
                  {link.name}
                  <span className="absolute -bottom-3 left-0 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/contact"}
          className="flex h-[49px] w-[183px] items-center justify-center rounded bg-bgBtn font-bold capitalize text-white transition-all duration-300 ease-in-out hover:opacity-80"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
