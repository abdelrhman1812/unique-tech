"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { MobileNav } from "./mobile-nav";

const NavLinks = () => {
  const pathname = usePathname();
  const router = useRouter();

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
      path: "#services",
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#services") {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path === "#services") {
      e.preventDefault();
      if (pathname === "/") {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/#services");
      }
    }
  };

  return (
    <div className="flex items-center justify-end">
      <MobileNav />
      <div className="hidden h-[49px] items-center justify-end space-x-[50px] lg:flex">
        <ul className="navbar-nav flex space-x-[50px]">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item group relative">
              <Link legacyBehavior href={link.path}>
                <a
                  className={`nav-link relative h-[22px] w-[53px] text-[18px] ${
                    isActive(link.path) ? "text-black" : "text-grayMuted"
                  } transition-all duration-300 ease-in-out`}
                  onClick={(e) => handleClick(e, link.path)}
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
          className="flex h-[49px] w-[183px] items-center justify-center rounded-[12px] bg-bgBtn font-bold uppercase text-white transition-all duration-300 ease-in-out hover:opacity-80"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
