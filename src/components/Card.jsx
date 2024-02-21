const Card = ({ cardImage, cardDescription, altImg }) => {
  return (
    <div className="flex flex-col gap-5 m-auto">
      <img className="card-img" src={cardImage} alt={altImg} width={70} />
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card;
