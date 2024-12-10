"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import workImageEgypt from "../../../../public/assets/egypt-12.png";
import workImage from "../../../../public/assets/image 1.png";

interface SlideData {
  id: number;
  image: StaticImageData;
  title: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    image: workImage,
    title: "WEBSITE - Increasing your productivity",
  },
  {
    id: 2,
    image: workImageEgypt,
    title: "WEBSITE - Boosting your efficiency",
  },
  {
    id: 3,
    image: workImage,
    title: "WEBSITE - Creativity unleashed",
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
  <div className="flex items-center justify-around mt-4 rounded-full bg-gray-200 w-[109px] h-[39px]">
    {slides.map((_, index) => (
      <motion.span
        key={index}
        className={`w-[15px] h-[15px] rounded-full cursor-pointer bg-gray-300 transition-all duration-300 
          ${index === currentIndex ? "bg-gray-700 scale-125" : ""}`}
        onClick={() => onDotClick(index)}
        whileTap={{ scale: 1.4 }}
      ></motion.span>
    ))}
  </div>
);

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleSlides = [
    slidesData[currentIndex],
    slidesData[(currentIndex + 1) % slidesData.length],
  ];

  return (
    <div className="relative w-full max-w-[1200px] mt-11">
      {/* Desktop View */}
      <motion.div
        className="md:flex justify-center hidden items-center gap-6 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {visibleSlides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </motion.div>

      {/* Mobile View */}
      <div className="flex justify-center md:hidden items-center gap-6 mb-5">
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
