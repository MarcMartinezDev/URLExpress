const Button = ({ textButton, typeButton, clickEvent, styles }) => {
  return (
    <button
      onClick={clickEvent}
      typeof={typeButton}
      className={`p-2 rounded-md bg-primary shadow-md text-black text-lg hover:bg-purple-600 transition-all ${styles}`}
    >
      {textButton}
    </button>
  );
};

export default Button;
