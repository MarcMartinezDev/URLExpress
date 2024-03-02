import React from "react";

const Card = ({ cardImage, cardDescription, altImg }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 text-center">
      <img src={cardImage} alt={altImg} width={100} />
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card;
