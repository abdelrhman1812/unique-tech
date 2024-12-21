import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="container flex h-auto flex-col items-center justify-between py-5 md:flex-row md:py-[100px]">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default Hero;
