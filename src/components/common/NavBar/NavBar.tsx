"use client";

import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "fixed left-0 top-0 z-50" : "static"
      } w-full py-6 shadow-custom transition-all duration-500 ease-in-out sm:py-10 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="bg-bla container flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
