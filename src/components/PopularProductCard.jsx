import star from "../assets/icons/index";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="flex mt-8 gap-2.5 pb-3">
        <img src={star} />
        <p className="font-montserrat text-lg">(4.5)</p>
      </div>
      <h3 className=" text-2xl font-palanquin font-semibold">{name}</h3>
      <p className="text-coral-red font-semibold font-montserrat text-2xl pt-3">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
