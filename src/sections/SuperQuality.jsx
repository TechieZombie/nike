import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="lg:flex">
      <div className="lg:w-[50vw] mt-12">
        <h2 className="text-4xl font-palanquin font-bold pt-8">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="font-montserrat text-[18px] text-[#6D6D6D] mt-4 leading-normal">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="font-montserrat text-[18px] text-[#6D6D6D] mt-4 leading-normal">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className="text-white bg-coral-red rounded-full font-montserrat text-[18px] py-[14px] px-[28px] leading-normal mt-11">
          View details
        </button>
      </div>
      <div className="flex justify-center sm:pt-8">
        <img src={shoe8} />
      </div>
    </section>
  );
};

export default SuperQuality;
