import { useContext, useState } from "react";
import { context } from "../App";

const Clipboard = ({ url }) => {
  const { setIsQrModalOpen, setIsShareModalOpen } = useContext(context);
  const [action, setAction] = useState();

  return (
    <section className="absolute w-full top-2/3">
      <div className={`flex w-full justify-between p-4 bg-slate-600 my-2 text-lg`}>
        <p>{window.location.href + url}</p>
        <div className="flex gap-7 items-center">
          <i
            className={`fa-solid fa-copy ${action === "copy" ? "text-black" : null}`}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href + url);
              setAction("copy");
            }}
          />
          <i
            className={`fa-solid fa-qrcode ${action === "qrcode" ? "text-black" : null}`}
            onClick={() => {
              setIsQrModalOpen(true);
              setAction("qrcode");
            }}
          />
          <i
            className={`fa-solid fa-share-nodes ${action === "share" ? "text-black" : null} `}
            onClick={() => {
              setIsShareModalOpen(true);
              setAction("share");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Clipboard;
