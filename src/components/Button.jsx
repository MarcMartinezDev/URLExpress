const Button = ({ textButton, typeButton, clickEvent, styles }) => {
  return (
    <button onClick={clickEvent} typeof={typeButton} className={styles}>
      {textButton}
    </button>
  );
};

export default Button;
