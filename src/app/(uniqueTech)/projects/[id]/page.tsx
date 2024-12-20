"use client";
import { StaticImageData } from "next/image";

import { mock_projects } from "@/components/data/mock-projects";
import Collaborate from "@/components/homePage/Collaborate/Collaborate";
import OurWork from "@/components/homePage/OurWork/OurWork";
import { Projects } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

type SlideProps = {
  image: StaticImageData;
};

type DotsNavigationProps = {
  slides: SlideProps[];
  currentIndex: number;
  onDotClick: (index: number) => void;
};

type SliderProps = {
  slides: SlideProps[];
};

const Slide = ({ image }: SlideProps) => (
  <motion.div
    className="w-[588px] transform"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <Image
      src={image}
      alt="Slide image"
      width={588}
      height={472}
      className="w-[400px] rounded-md md:w-full"
      loading="eager"
      priority
    />
  </motion.div>
);

const DotsNavigation = ({
  slides,
  currentIndex,
  onDotClick,
}: DotsNavigationProps) => (
  <div className="mt-6 flex h-[39px] w-[109px] items-center justify-around rounded-full bg-gray-200">
    {slides.map((_, index) => (
      <motion.span
        key={index}
        className={`h-[12px] w-[12px] cursor-pointer rounded-full bg-gray-300 transition-all duration-300 ${
          index === currentIndex ? "scale-125 bg-gray-700" : ""
        }`}
        onClick={() => onDotClick(index)}
        whileTap={{ scale: 1.4 }}
      ></motion.span>
    ))}
  </div>
);

const Slider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="my-12">
      <Slide image={slides[currentIndex].image} />

      <DotsNavigation
        slides={slides}
        currentIndex={currentIndex}
        onDotClick={setCurrentIndex}
      />
    </div>
  );
};

const Page = () => {
  const { id } = useParams();
  const project = mock_projects.find(
    (project: Projects) => project.id === Number(id),
  );
  console.log(project, id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-black">Project not found</h1>
      </div>
    );
  }

  return (
    <main className="pt-[40px]">
      <div className="container mb-12">
        <div className="flex flex-col px-4 md:flex-row md:space-x-6">
          <div className="w-[94px] py-[40px]">
            <motion.span
              className="block h-2 w-[94px] rounded bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            ></motion.span>
          </div>
          <div>
            <motion.h2
              className="mb-3 text-[32px] font-bold text-[#171717] md:text-[48px] lg:text-[64px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {project.title}
            </motion.h2>

            <Slider slides={project.images.map((image) => ({ image }))} />
            <p className="text-xl leading-[36px] text-[#1F1F39B2]">
              {project.description}
            </p>
            <motion.button
              className="hover:bg-bgBtnHover mt-5 h-[66px] w-[246px] rounded-[11px] bg-bgBtn p-[10px] font-bold text-white transition sm:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              LET’S TALK
            </motion.button>
          </div>
        </div>
      </div>
      <Collaborate />
      <OurWork />
    </main>
  );
};

export default Page;
