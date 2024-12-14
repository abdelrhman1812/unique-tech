import AboutImages from "./About-images";
import AboutText from "./About-text";

const AboutHero = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-y-[30px] md:gap-y-0 gap-x-[30px] md:gap-x-[20px]">
      <AboutImages />
      <AboutText />
    </section>
  );
};

export default AboutHero;
