import AboutUs from "./About-us/About-us";
import Collaborate from "./Collaborate/Collaborate";
import Hero from "./Hero/Hero";
import OurWork from "./OurWork/OurWork";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <OurWork />
      <Collaborate />
      <AboutUs />
      <Reviews />
    </>
  );
};

export default HomePage;
