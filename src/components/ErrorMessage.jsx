const ErrorMessage = ({ message }) => {
  return (
    <div className="absolute top-2 flex gap-4 px-2 py-1 rounded-md items-center bg-red-500  text-black text-sm w-fit shadow-md mb-5">
      <i className="fa-solid fa-circle-exclamation cursor-default" />
      <p>{`Error: ${message}`}</p>
    </div>
  );
};

export default ErrorMessage;
