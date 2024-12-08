"use client";

import { Button } from "@/components/ui/button";
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
import { useMemo } from "react";

export function MobileNav() {
  // Memoizing the navLinks to avoid unnecessary recalculations on re-renders
  const memoizedNavLinks = useMemo(
    () =>
      navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className="block p1-2 text-lg"
          aria-label={link.name}
        >
          {link.name}
        </Link>
      )),
    []
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-10 w-10" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <span>Menu</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col py-6 gap-3">
          {memoizedNavLinks}
          <Button className="w-full mt-4" aria-label="Get in touch">
            Get In Touch
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
