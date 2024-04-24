import { Button } from "../components";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h1 className="font-palanquin text-4xl font-bold max-w-md leading-normal">
        Sign Up for <span className="text-coral-red"> Updates</span> &
        Newsletter
      </h1>

      <div className="lg:max-w-[40%] w-full flex  items-center max-sm:flex-col gap-5 p-4 sm:border sm:border-slate-gray rounded-full ">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full ">
          <Button label="sign Up" fullWidth className="flex" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
