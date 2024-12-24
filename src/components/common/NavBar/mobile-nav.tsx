"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);

    if (path.includes("#services")) {
      // إذا كنا بالفعل على الصفحة الرئيسية
      if (window.location.pathname === "/") {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // إذا كنا على صفحة أخرى، انتقل للصفحة الرئيسية أولاً
        router.push("/");
        // استخدم مراقبة التغيير للتأكد من جاهزية الصفحة
        const checkServicesSection = setInterval(() => {
          const servicesSection = document.getElementById("services");
          if (servicesSection) {
            clearInterval(checkServicesSection);
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <>
      {isMobile && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open mobile menu"
              className="h-[45px] w-[45px] cursor-pointer lg:hidden"
            >
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] px-0 sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>
                <span>{""}</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-3 py-6">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.path)}
                  className="block border-b border-gray-200 py-3 ps-3 text-left text-lg"
                  aria-label={link.name}
                >
                  {link.name}
                </button>
              ))}
              <Link
                href="/contact"
                className="mx-auto mt-5 flex h-[49px] w-[183px] items-center justify-center rounded-[12px] bg-bgBtn font-bold capitalize text-white transition-all duration-300 ease-in-out hover:opacity-80"
              >
                Get In Touch
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
