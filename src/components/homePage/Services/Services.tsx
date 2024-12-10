import AccordionServices from "./Accordion-Services";
import ServicesHead from "./Services-head";

const Services = () => {
  return (
    <section className="services bg-black py-[100px]  md:h-[761px]">
      <div className="container flex-col flex md:flex-row gap-x-[29px]">
        <ServicesHead />
        <AccordionServices />
      </div>
    </section>
  );
};

export default Services;
