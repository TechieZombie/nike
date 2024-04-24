const Button = ({ label, iconURL }) => {
  return (
    <div className="text-lg">
      <button className="flex justify-center border rounded-full items-center ml-3 mt-8 px-7 py-4 bg-coral-red text-white font-montserrat text-center  ">
        {label}
        <img src={iconURL} alt="" className="ml-2 rounded-full" />
      </button>
    </div>
  );
};

export default Button;
