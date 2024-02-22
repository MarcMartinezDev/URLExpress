const Card = ({ cardImage, cardDescription, altImg }) => {
  return (
    <div className="flex gap-5 items-center shadow-md bg-slate-900 text-center p-4 min-h-max rounded-md border-2 border-gray-600 hover:border-primary transition-all">
      <img className="invert m-auto" src={cardImage} alt={altImg} width={70} />
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card;
