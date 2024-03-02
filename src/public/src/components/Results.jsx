import React from "react";
import { context } from "../App";
import { createQrcode, downloadQrcode } from "../utils/app.utils";
import { useRef, useContext, useEffect, useState } from "react";
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
  const { url, isResults, setIsResults } = useContext(context);

  const downloadQr = () => downloadQrcode(imgQrcode.current.src);

  useEffect(() => {
    if (isResults) createQrcode(url, imgQrcode);
  }, [isResults]);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between w-full text-start items-center bg-dark p-2 text-white shadow-md">
        <span>
          <p>{window.location.href + url}</p>
        </span>
        <img
          src="assets/svg/share.svg"
          width={30}
          className="cursor-pointer mx-1"
          onClick={() => {
            if (isShare) setIsShare(false);
            else setIsShare(true);
          }}
        />
      </div>
      {isShare ? (
        <div className="flex gap-5 justify-center">
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
      <div className=" flex items-center m-auto gap-5">
        <div>
          <img src="" alt="QR Code" width={120} ref={imgQrcode} />
        </div>
        <div className="flex flex-col gap-5">
          <Button textButton="Download QR" clickEvent={downloadQr} styles="py-1" />
          <Button
            textButton="Short another url"
            clickEvent={() => setIsResults(false)}
            styles="py-1 px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
