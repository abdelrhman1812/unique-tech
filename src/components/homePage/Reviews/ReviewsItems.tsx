"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
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
      title:
        "SquareUp has been Instrumental in Transforming our Online Presence.",
      description:
        "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
      user: {
        name: "John Smith",
        title: "CEO of Chic Boutique",
        image: imgProfile,
      },
    },
    {
      id: 2,
      title: "Working with Unuiqu was a breeze.",
      description:
        "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
      user: {
        name: "Sarah Johnson",
        title: "Founder of HungryBites",
        image: imgProfile,
      },
    },
  ];

  return (
    <motion.div
      className="container relative flex flex-col items-center justify-between gap-y-4 px-3 py-16 sm:px-8 lg:flex-row lg:gap-y-0 lg:px-[100px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          className={`w-full space-y-6 rounded-lg p-0 sm:p-4 lg:w-[540px] ${
            index === 0 ? "lg:mr-[50px]" : "lg:ml-[50px]"
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
            <p className="font-Poppins text-lg font-light leading-7 text-[#e6e6e6]">
              {review.description}
            </p>
          </div>

          {/* User */}
          <div className="flex flex-col gap-y-3 rounded-[8px] bg-[#5A5858] p-5 sm:flex-row sm:items-center sm:gap-y-0">
            <div className="flex flex-grow items-center gap-4">
              {/* Image */}
              <figure>
                <Image
                  src={review.user.image}
                  alt={`${review.user.name}'s profile`}
                  width={60}
                  height={60}
                  className="rounded[8px] object-cover"
                />
              </figure>
              {/* Text */}
              <div>
                <h2 className="font-Poppins text-[20px] font-medium text-white">
                  {review.user.name}
                </h2>
                <p className="text-lg text-[#e6e6e6]">{review.user.title}</p>
              </div>
            </div>
            {/* Button */}
            {/* <button className="bg-[#262626] text-white font-Poppins text-sm px-6 py-2 w-full h-[50px] sm:w-[168px] sm:h-[63px] rounded-lg hover:bg-gray-900 transition">
              Open Website
            </button> */}
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
