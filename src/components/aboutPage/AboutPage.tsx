import AboutUs from "../homePage/About-us/About-us";
import OurMission from "../homePage/About-us/OurMission";
import ReviewsItemsAbout from "../homePage/About-us/RewiewsItemsAbout";
import TitleReviews from "../homePage/Reviews/TitleReviews";
import WhyUs from "./WhyUs";

const AboutPage = () => {
  return (
    <main>
      <AboutUs />
      <WhyUs />
      <OurMission />
      <div>
        <section className="bg-foreground">
          <TitleReviews />
          <div className="container">
            <ReviewsItemsAbout />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
