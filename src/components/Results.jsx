import { useRef, useContext, useEffect, useState } from "react";
import { createQrcode, downloadQrcode } from "../utils/app.utils";
import { context } from "../App";
import Button from "./Button";
import {
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const Results = () => {
  const imgQrcode = useRef();
  const [isShare, setIsShare] = useState(false);
  const { url, isModalOpen, setIsModalOpen } = useContext(context);

  const downloadQr = () => downloadQrcode(imgQrcode.current.src);

  useEffect(() => {
    if (isModalOpen) createQrcode(url, imgQrcode);
  }, [isModalOpen]);

  return (
    <div className="absolute -top-20 w-full bg-slate-900 z-10 rounded-md p-10 flex flex-col gap-5 border-2 border-slate-600">
      <div className="relative">
        <i className="fa-solid fa-xmark absolute -right-5 -top-5" onClick={() => setIsModalOpen(false)} />
        <p>Your url</p>
        <input
          className="bg-transparent border-2 w-full border-gray-600 rounded-md min-h-10 pl-5 pr-10 outline-none"
          type="text"
          readOnly
          value={window.location.href + url}
        />
        <i
          className={`fa-solid fa-share-nodes absolute right-5 top-9 ${isShare ? "text-regular" : null}`}
          onClick={() => {
            if (isShare) setIsShare(false);
            else setIsShare(true);
          }}
        />
      </div>
      {isShare ? (
        <div className="flex gap-5">
          <WhatsappShareButton url={window.location.href + url} title={window.location.href + url}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <EmailShareButton url={window.location.href + url} subject={window.location.href + url}>
            <EmailIcon size={40} round />
          </EmailShareButton>
          <LinkedinShareButton url={window.location.href + url} title={window.location.href + url}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <TelegramShareButton url={window.location.href + url} title={window.location.href + url}>
            <TelegramIcon size={40} round />
          </TelegramShareButton>
          <TwitterShareButton url={window.location.href + url} title={window.location.href + url}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <FacebookShareButton url={window.location.href + url} title={window.location.href + url}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
        </div>
      ) : null}
      <p>QR Code</p>
      <div className=" flex items-center gap-5">
        <div>
          <img src="" alt="QR Code" width={100} ref={imgQrcode} />
        </div>
        <Button textButton="Download" clickEvent={downloadQr} styles="w-1/3 h-fit" />
      </div>
    </div>
  );
};

export default Results;
