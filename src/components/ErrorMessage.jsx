const ErrorMessage = ({ message }) => {
  return (
    <div className="flex gap-4 px-4 py-1 items-center bg-red-500  text-black text-md w-fit shadow-md">
      <i className="fa-solid fa-circle-exclamation cursor-default" />
      <p>{`Error: ${message}`}</p>
    </div>
  );
};

export default ErrorMessage;
