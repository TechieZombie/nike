const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center border rounded-full items-center ml-3 mt-8 px-4 py-2 bg-coral-red">
      {label}
      <img src={iconURL} alt="" className="ml-2 rounded-full" />
    </button>
  );
};

export default Button;
