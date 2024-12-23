"use client";

import { mock_projects } from "@/components/data/mock-projects";
import { Projects } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SlideProps {
  slide: Projects;
}

const Slide: React.FC<SlideProps> = ({ slide }) => (
  <motion.div
    className="w-[588px] transform"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <Image
      src={slide.imageCover}
      alt={`Slide ${slide.id}`}
      width={588}
      height={472}
      className="w-full"
    />
    <Link href={`/projects/${slide.id}`}>
      <h2 className="mt-3 text-xl font-bold md:text-xl">
        WEBSITE -
        <span className="font-normal text-black opacity-70">
          {" "}
          {slide.title}
        </span>
      </h2>
    </Link>
    {/* <p className="mt-2 text-lg font-bold text-gray-700">{slide.title}</p> */}
  </motion.div>
);

interface DotsNavigationProps {
  slides: Projects[];
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const DotsNavigation: React.FC<DotsNavigationProps> = ({
  slides,
  currentIndex,
  onDotClick,
}) => (
  <div className="mt-4 flex h-[39px] w-[109px] items-center justify-around rounded-full bg-gray-200">
    {slides.map((_, index) => (
      <motion.span
        key={index}
        className={`h-[12px] w-[12px] cursor-pointer rounded-full bg-gray-300 transition-all duration-300 ${index === currentIndex ? "scale-125 bg-gray-700" : ""}`}
        onClick={() => onDotClick(index)}
        whileTap={{ scale: 1.4 }}
      ></motion.span>
    ))}
  </div>
);

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set the interval to automatically switch slides every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mock_projects.length);
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const visibleSlides = [
    mock_projects[currentIndex],
    mock_projects[(currentIndex + 1) % mock_projects.length],
  ];

  return (
    <div className="relative mt-11 w-full max-w-[1200px]">
      {/* Desktop View */}
      <motion.div
        className="mb-5 hidden items-center justify-center gap-6 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {visibleSlides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </motion.div>

      {/* Mobile View */}
      <div className="mb-5 flex items-center justify-center gap-6 md:hidden">
        <Slide slide={visibleSlides[0]} />
      </div>

      {/* Dots Navigation */}
      <DotsNavigation
        slides={mock_projects}
        currentIndex={currentIndex}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
};

export default Slider;
