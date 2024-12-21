import ReviewsItems from "./ReviewsItems";
import TitleReviews from "./TitleReviews";

const Reviews = () => {
  return (
    <section className="bg-foreground">
      <TitleReviews />
      <div className="container">
        <ReviewsItems />
      </div>
    </section>
  );
};

export default Reviews;
