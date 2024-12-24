"use client";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import imgProfile from "../../../../public/assets/Profile.png";

interface Review {
  id: number;
  title: string;
  description: string;
  user: {
    name: string;
    title: string;
    image: StaticImageData;
  };
}

const ReviewsItems: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      title: "I would like to express my sincere thanks and appreciation..",
      description:
        "I would like to express my sincere thanks and appreciation for the outstanding work we have done together. My experience working with you has been truly exceptional, and I am very pleased with the collaboration. Your commitment to quality and punctuality throughout the project made the entire process smooth and successful.",
      user: {
        name: "ENG AHMED MAHMOUD",
        title: "CEO of Wzkker app.",
        image: imgProfile,
      },
    },
    {
      id: 2,
      title: "I wanted to take a moment to thank you for..",
      description:
        "I wanted to take a moment to thank you for the exceptional experience I had working with your team. It has truly been a pleasure collaborating with you. Your professionalism and dedication to meeting deadlines were impressive and made the entire process smooth and enjoyable.",
      user: {
        name: "ENG MAHMOUD  ALI",
        title: "Founder of Elbasuony office.",
        image: imgProfile,
      },
    },
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center justify-between gap-x-14 gap-y-4 py-16 lg:flex-row"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          className={`w-full space-y-6 rounded-lg p-0 sm:py-4 ${
            index === 0 ? "lg:mr-[0px]" : "lg:ml-[0px]"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <div className="min-h-[220px] space-y-4">
            <h3 className="font-Poppins text-[24px] font-medium leading-10 text-white sm:text-[28px]">
              {review.title}
            </h3>
            <p className="font-Poppins text-lg font-light leading-7 text-[#e6e6e6] md:min-h-[210px]">
              {review.description}
            </p>
          </div>

          {/* User */}
          <div className="flex flex-col gap-y-3 rounded-[8px] bg-[#5A5858] p-5 sm:flex-row sm:items-center sm:gap-y-0">
            <div className="flex flex-grow items-center gap-4">
              {/* Text */}
              <div>
                <h2 className="font-Poppins text-[20px] font-medium text-white">
                  {review.user.name}
                </h2>
                <p className="text-lg text-[#e6e6e6]">{review.user.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Vertical Line */}
      <motion.div
        className="absolute left-1/2 top-1/2 hidden h-[100%] w-[1px] -translate-y-1/2 transform bg-black lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default ReviewsItems;
