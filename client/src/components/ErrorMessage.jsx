const ErrorMessage = ({ message }) => {
  return (
    <div className="flex gap-2 px-2 py-1 items-center bg-red-200  text-black text-sm w-fit shadow-md">
      <img src="/svg/cancel.svg" alt="" width={25} />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
