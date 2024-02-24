const Card = ({ cardImage, cardDescription, altImg }) => {
  return (
    <div className="flex flex-col gap-5 text-center text-gray-400">
      <img className="m-auto img-ico" src={cardImage} alt={altImg} width={120} />
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card;
