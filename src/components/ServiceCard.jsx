const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-3xl rounded-[20px]  px-8 py-8 ">
      <div className="">
        <img
          src={imgURL}
          alt={label}
          className="bg-coral-red rounded-full p-2"
        />
      </div>
      <h2 className="text-3xl font-bold font-palanquin leading-normal pt-4">
        {label}
      </h2>
      <p className="font-montserrat text-lg text-[#6D6D6D] leading-normal pt-3">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
