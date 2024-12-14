"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const AccordionServices = () => {
  const data = [
    {
      title: "Visual Branding",
      description:
        "Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience.",
    },
    {
      title: "Mobile Development",
      description:
        "We provide top-notch mobile app development services that ensure smooth and engaging user experiences. Our team works with you to create mobile apps that are both functional and visually appealing.",
    },
    {
      title: "Web Development",
      description:
        "We create responsive and dynamic websites that help your business thrive in the digital world. Our team uses the latest technologies to deliver top-quality web solutions.",
    },
    {
      title: "SEO Services",
      description:
        "Our SEO experts work tirelessly to optimize your website's performance, helping you rank higher on search engines and reach your target audience effectively.",
    },
  ];

  return (
    <div className="w-full max-w-[972px] h-auto">
      <Accordion type="single" collapsible defaultValue="item-1">
        {data.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            {/* Animated Accordion Trigger with useInView */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <AccordionTrigger className="text-white w-full py-[30px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-[40px] sm:leading-[50px] md:leading-[60px]">
                {item.title}
              </AccordionTrigger>
            </motion.div>

            {/* Animated Accordion Content with useInView */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2 + 0.4, // Content appears slightly after the title
              }}
              viewport={{ once: true }}
            >
              <AccordionContent className="text-white w-full border-t text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] opacity-70 leading-[30px] sm:leading-[36px] md:leading-[40px]">
                {item.description}
              </AccordionContent>
            </motion.div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionServices;
