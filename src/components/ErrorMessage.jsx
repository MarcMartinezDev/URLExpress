const ErrorMessage = ({ message }) => {
  return (
    <div className="flex gap-4 px-2 py-1 items-center bg-red-200  text-black text-sm w-fit shadow-md mb-5">
      <i className="fa-solid fa-circle-exclamation cursor-default" />
      <p>{`Error: ${message}`}</p>
    </div>
  );
};

export default ErrorMessage;
