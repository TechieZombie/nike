import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex max-xl:flex-col-reverse gap-10">
      <div className="w-[50vw]">
        <img
          src={offer}
          alt=""
          width={"773"}
          height={"687"}
          className="object-center w-full]"
        />
      </div>
      <div className="">
        <h2 className="text-4xl font-bold font-palanquin leading-normal">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <div className="font-montserrat text-[#6D6D6D] pt-2.5 text-lg leading-7">
          <p className="MT-4">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="pt-4">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>

        <Button label="Shop now" />
      </div>
    </section>
  );
};

export default SpecialOffer;
