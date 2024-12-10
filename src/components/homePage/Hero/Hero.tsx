import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="container py-5 md:py-[100px] w-full md:w-[1440px] flex flex-col md:flex-row items-center justify-between h-auto">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default Hero;
