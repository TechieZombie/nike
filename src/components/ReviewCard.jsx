import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center  items-center  text-center max-lg:flex-col mt-12 ">
      <img
        src={imgURL}
        alt="customer"
        className="w-[120px] h-[120px] rounded-full "
      />
      <p className="text font-montserrat mt-4 text-lg max-w-sm info-text">
        {feedback}
      </p>

      <div className="flex gap-2  info-text pt-3 leading-16">
        <img src={star} alt="star" />
        <p>({rating})</p>
      </div>
      <h3 className="font-palanquin font-bold text-3xl ">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
