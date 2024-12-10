import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <AccordionTrigger className="text-white w-full py-[30px] text-[32px] font-medium leading-[60px]">
              {item.title}
            </AccordionTrigger>
            <hr className="w-full h-[1px] bg-white opacity-95" />
            <AccordionContent className="text-white w-full text-xl opacity-70 leading-[48px] ">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionServices;
