"use client";

import Image from "next/image";
import { useState } from "react";
import workImageEgypt from "../../../../public/assets/egypt-12.png";
import workImage from "../../../../public/assets/image 1.png";

const Slider = () => {
  const slides = [
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
      title: "WEBSITE - Increasing your productivity",
    },
    {
      id: 4,
      image: workImageEgypt,
      title: "WEBSITE - Boosting your efficiency",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto text-center">
      <div className="flex justify-center items-center gap-5 mb-5">
        {/* First image */}
        <div
          className={`w-[588px] transition-all duration-700 ease-in-out transform ${
            currentIndex % 2 === 0 ? "opacity-100" : "opacity-50"
          }`}
        >
          <Image
            src={slides[currentIndex].image}
            alt={`Slide ${slides[currentIndex].id}`}
            width={588}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-lg font-bold text-gray-700">
            {slides[currentIndex].title}
          </p>
        </div>

        {/* Second image */}
        <div
          className={`w-[588px] transition-all duration-700 ease-in-out transform ${
            (currentIndex + 1) % 2 === 0 ? "opacity-100" : "opacity-50"
          }`}
        >
          <Image
            src={slides[(currentIndex + 1) % slides.length].image}
            alt={`Slide ${(currentIndex + 1) % slides.length}`}
            width={588}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-lg font-bold text-gray-700">
            {slides[(currentIndex + 1) % slides.length].title}
          </p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer bg-gray-300 transition-all duration-300 ${
              index === currentIndex ? "bg-gray-700 scale-125" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;

// "use client";

// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import workImageEgypt from "../../../../public/assets/egypt-12.png";
// import workImage from "../../../../public/assets/image 1.png";

// const Slider = () => {
//   const slides = [
//     {
//       id: 1,
//       image: workImage,
//       title: "WEBSITE - Increasing your productivity",
//     },
//     {
//       id: 2,
//       image: workImageEgypt,
//       title: "WEBSITE - Boosting your efficiency",
//     },
//     {
//       id: 1,
//       image: workImage,
//       title: "WEBSITE - Increasing your productivity",
//     },
//     {
//       id: 2,
//       image: workImageEgypt,
//       title: "WEBSITE - Boosting your efficiency",
//     },
//     {
//       id: 1,
//       image: workImage,
//       title: "WEBSITE - Increasing your productivity",
//     },
//     {
//       id: 2,
//       image: workImageEgypt,
//       title: "WEBSITE - Boosting your efficiency",
//     },
//   ];

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "center",
//     slidesToScroll: 1,
//     skipSnaps: false,
//     dragFree: true,
//   });

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   const scrollTo = useCallback(
//     (index: number) => emblaApi && emblaApi.scrollTo(index),
//     [emblaApi]
//   );

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(Math.ceil(emblaApi.selectedScrollSnap()));
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="relative w-full max-w-[1200px] mx-auto">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex gap-6">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className="flex-[0_0_48%] min-w-0 relative transition-transform duration-300 ease-out"
//             >
//               <div
//                 className={`relative transition-all duration-500 ${
//                   selectedIndex === index
//                     ? "opacity-100 scale-100"
//                     : "opacity-50 scale-95"
//                 }`}
//               >
//                 <Image
//                   src={slide.image}
//                   alt={`Slide ${slide.id}`}
//                   width={588}
//                   height={300}
//                   className="w-full h-auto rounded-lg shadow-lg"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
//                 <p className="absolute bottom-4 left-4 text-lg font-bold text-white">
//                   {slide.title}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots Navigation */}
//       <div className="flex justify-center gap-2 mt-6">
//         {scrollSnaps.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === selectedIndex
//                 ? "bg-gray-800 scale-125"
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//             onClick={() => scrollTo(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
