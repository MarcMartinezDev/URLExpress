const Button = ({ textButton, typeButton, clickEvent }) => {
  return (
    <button
      onClick={clickEvent}
      typeof={typeButton}
      className="w-1/4 p-2 bg-primary shadow-md text-black text-lg hover:bg-purple-600 transition-all"
    >
      {textButton}
    </button>
  );
};

export default Button;
