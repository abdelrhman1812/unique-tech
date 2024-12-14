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
      className="relative flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-0 px-8 lg:px-[100px] w-full max-w-[1440px] mx-auto py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          className={`space-y-6 w-full lg:w-[540px] p-4 rounded-lg ${
            index === 0 ? "lg:mr-[50px]" : "lg:ml-[50px]"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 min-h-[220px]">
            <h3 className="text-[28px] font-medium font-Poppins leading-10 text-white">
              {review.title}
            </h3>
            <p className="text-[#e6e6e6] leading-7 text-lg font-light font-Poppins">
              {review.description}
            </p>
          </div>

          {/* User */}
          <div className="flex gap-y-3 sm:gap-y-0 sm:items-center flex-col sm:flex-row rounded-[8px] p-5 bg-[#5A5858]">
            <div className="flex gap-4 flex-grow items-center">
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
                <h2 className="text-[20px] font-medium font-Poppins text-white">
                  {review.user.name}
                </h2>
                <p className="text-lg text-[#e6e6e6]">{review.user.title}</p>
              </div>
            </div>
            {/* Button */}
            <button className="bg-[#262626] text-white font-Poppins text-sm px-6 py-2 w-full h-[50px] sm:w-[168px] sm:h-[63px] rounded-lg hover:bg-gray-900 transition">
              Open Website
            </button>
          </div>
        </motion.div>
      ))}

      {/* Vertical Line */}
      <motion.div
        className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 w-[1px] h-[100%] bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default ReviewsItems;
