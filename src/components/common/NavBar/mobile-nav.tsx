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
              className="h-[45px] w-[45px] lg:hidden cursor-pointer"
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
            <nav className="flex flex-col py-6 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-lg border-b ps-3 border-gray-200 py-3"
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                className="bg-bgBtn w-[183px] h-[49px] font-bold mx-auto text-white capitalize rounded mt-5"
              >
                Get In Touch
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
