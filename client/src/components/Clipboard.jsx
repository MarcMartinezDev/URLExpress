import { deleteShortUrl } from "../api/requests";
import { useContext } from "react";
import { context } from "../App";

const Clipboard = ({ url }) => {
  const { deleteUrl, setDeleteUrl } = useContext(context);

  const handleSubmitDelete = async () => {
    await deleteShortUrl(url)
      .then(res => res.json())
      .then(res => {
        if (res.error) setError(res.error);
        else {
          setDeleteUrl(true);
        }
      });
  };

  return !deleteUrl ? (
    <div className="flex w-full justify-between p-4 rounded-md bg-slate-900 my-2 text-lg">
      <p>{window.location.href + url}</p>
      <div className="flex gap-7 items-center">
        <span
          className="cursor-pointer fa-solid fa-copy scale-125"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href + url);
          }}
        />
        <span className="cursor-pointer fa-solid fa-qrcode scale-125" />
        <span
          className="cursor-pointer fa-solid fa-trash scale-125"
          onClick={handleSubmitDelete}
        />
      </div>
    </div>
  ) : (
    <p className=" p-2 rounded-md bg-green-700 text-lg mt-5 shadow-md w-fit">
      Url has been deleted
    </p>
  );
};

export default Clipboard;
