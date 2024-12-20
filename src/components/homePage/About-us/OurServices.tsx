import SingleServices from "./SingleServices";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    id: crypto.randomUUID(),
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: "/assets/about/icons/Icon1.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    icon: "/assets/about/icons/2.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: "/assets/about/icons/3.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: "/assets/about/icons/4.png",
  },
];

const OurServices = () => {
  return (
    <section className="relative">
      <div className="container grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-0">
        {services.map((service) => (
          <SingleServices key={service.id} service={service} />
        ))}
      </div>
      {/*  Lines */}
      <div className="absolute left-1/2 top-1/2 hidden h-full w-[1px] -translate-y-1/2 transform bg-[#00000033] md:block"></div>
      <div className="absolute top-1/2 hidden h-[1px] w-full -translate-y-1/2 transform bg-[#00000033] md:block"></div>
    </section>
  );
};

export default OurServices;
