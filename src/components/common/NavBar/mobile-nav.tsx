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
import { useEffect, useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
                <Link
                  key={index}
                  href={link.path}
                  className="block border-b border-gray-200 py-3 ps-3 text-lg"
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={"/contact"}
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
