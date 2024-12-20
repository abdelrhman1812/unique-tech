import AccordionServices from "./Accordion-Services";
import ServicesHead from "./Services-head";

const Services = () => {
  return (
    <section
      id="services"
      className="services bg-black py-28 md:h-[761px] md:py-[100px]"
    >
      <div className="container flex flex-col gap-x-[29px] md:flex-row">
        <ServicesHead />
        <AccordionServices />
      </div>
    </section>
  );
};

export default Services;
