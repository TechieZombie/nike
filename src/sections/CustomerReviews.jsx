import { ReviewCard } from "../components/index";
import { reviews } from "../constants/index";

const CustomerReviews = () => {
  return (
    <section>
      <div className=" text-center ">
        <h1 className="text-4xl font-bold font-palanquin">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
      </div>
      <div className="text-center pt-4 text-gray-500  ">
        <p className="text-lg font-montserrat leading-7 ">
          Hear genuine stories from our satisfied customers about <br />
          their exceptional experiences with us.
        </p>
      </div>

      <div className="flex justify-around  items-center  mt-6  ">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
