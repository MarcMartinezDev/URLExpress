import React from "react";

const Button = ({ textButton, typeButton, clickEvent, styles }) => {
  return (
    <button
      onClick={clickEvent}
      typeof={typeButton}
      className={` bg-dark text-white text-lg shadow-md ${styles} hover:bg-semiDark hover:shadow-inner transition-all`}
    >
      {textButton}
    </button>
  );
};

export default Button;
