const Button = ({ textButton, typeButton, clickEvent, override }) => {
  return (
    <button
      onClick={clickEvent}
      typeof={typeButton}
      className={override ? override : "w-1/2 p-2 bg-purple-400 rounded-md shadow-md text-black text-lg hover:bg-purple-600 transition-all"}
    >
      {textButton}
    </button>
  );
};

export default Button;
