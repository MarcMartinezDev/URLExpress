import { useContext, useState } from "react";
import { context } from "../App";

const Clipboard = ({ url }) => {
  const { deleteUrl, setIsQrModalOpen, setIsShareModalOpen } = useContext(context);
  const [action, setAction] = useState();

  return !deleteUrl ? (
    <section>
      <div className="flex w-full justify-between p-4 rounded-md bg-slate-900 my-2 text-lg">
        <p>{window.location.href + url}</p>
        <div className="flex gap-7 items-center">
          <i
            className={`fa-solid fa-copy ${action === "copy" ? "text-yellow-500" : null}`}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href + url);
              setAction("copy");
            }}
          />
          <i
            className={`fa-solid fa-qrcode ${action === "qrcode" ? "text-yellow-500" : null}`}
            onClick={() => {
              setIsQrModalOpen(true);
              setAction("qrcode");
            }}
          />
          <i
            className={`fa-solid fa-share-nodes ${action === "share" ? "text-yellow-500" : null} `}
            onClick={() => {
              setIsShareModalOpen(true);
              setAction("share");
            }}
          />
        </div>
      </div>
    </section>
  ) : (
    <p className=" p-2 rounded-md bg-green-700 text-lg mt-5 shadow-md w-fit">Url has been deleted</p>
  );
};

export default Clipboard;
