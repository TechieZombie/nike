import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants/index.js";
import { bigShoe1 } from "../assets/images/index.js";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full paddinng-x flex md:flex-row flex-col justify-center min-h-screen">
      <div className="relative  xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className="text-coral-red  font-montserrat font-sm pt-8">
          Our Summer Collections
        </p>
        <h1 className="text-8xl font-semibold leading-20 pt-10 ">
          The New Arrival
          <br />
          <span className="text-coral-red "> Nike </span>
          Shoes
        </h1>
        <p className="text-gray-600 font-montserrat mt-4 mb-6">
          Discover stylish Nike arrivals, quality <br />
          comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div
          className="flex justify-start items-start flex-wrap
        w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-montserrat font-bold">{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-indigo-100 bg-cover sm:mt-16">
        <img
          className="justify-center items-center "
          src={bigShoe1}
          alt="bigshoe1"
        />
        <ShoeCard />
      </div>
    </section>
  );
};

export default Hero;
