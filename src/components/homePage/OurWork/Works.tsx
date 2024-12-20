"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import workImage from "../../../../public/assets/image 1.png";
import Eldwam from "../../../../public/assets/Projects/Eldwam.png";
import WZKKER from "../../../../public/assets/Projects/WZKKER.png";

interface SlideData {
  id: number;
  image: StaticImageData;
  title: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    image: workImage,
    title: "WEBSITE - Bit Encryption",
  },
  {
    id: 2,
    image: WZKKER,
    title: "WEBSITE - Boosting your efficiency",
  },
  {
    id: 3,
    image: Eldwam,
    title: "WEBSITE - Eldwam",
  },
];

interface SlideProps {
  slide: SlideData;
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
      src={slide.image}
      alt={`Slide ${slide.id}`}
      width={588}
      height={472}
      className="w-full"
    />
    <p className="mt-2 text-lg font-bold text-gray-700">{slide.title}</p>
  </motion.div>
);

interface DotsNavigationProps {
  slides: SlideData[];
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const visibleSlides = [
    slidesData[currentIndex],
    slidesData[(currentIndex + 1) % slidesData.length],
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
        slides={slidesData}
        currentIndex={currentIndex}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
};

export default Slider;
