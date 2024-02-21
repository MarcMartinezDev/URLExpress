import { createShortUrl, createCustomUrl } from "../api/requests.js";
import { useRef, useContext, useState } from "react";
import { context } from "../App.jsx";
import TextField from "./TextField.jsx";
import Button from "./Button.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import Clipboard from "./Clipboard.jsx";
import QrModal from "./modals/QrModal.jsx";
import ShareModal from "./modals/ShareModal.jsx";

const Shortener = () => {
  const inputUrl = useRef();
  const customUrl = useRef();
  const [isResult, setIsResult] = useState(false);
  const { error, setError, isQrModalOpen, isShareModalOpen, url, setUrl } = useContext(context);

  const [isCustomUrl, setIsCustomUrl] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isCustomUrl) {
      await createShortUrl(inputUrl.current.value)
        .then(res => res.json())
        .then(res => {
          if (res.error) setError(res.error);
          else {
            setUrl(res);
            setIsResult(true);
          }
        });
    } else {
      await createCustomUrl(inputUrl.current.value, customUrl.current.value)
        .then(res => res.json())
        .then(res => {
          if (res.error) setError(res.error);
          else {
            setUrl(res);
            setIsResult(true);
          }
        });
    }
  };

  return (
    <div>
      <QrModal />
      <ShareModal />
      <div className={`flex flex-col ${isQrModalOpen || isShareModalOpen ? "pointer-events-none opacity-30" : null}`}>
        {error ? <ErrorMessage message={error} /> : null}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex gap-1">
            <TextField
              textFieldRef={inputUrl}
              placeholderTextField="https://www.yoursite.com"
              legendTextField="Copy an url"
            />
            <Button textButton="Short" typeButton="submit" styles="w-1/4" />
          </div>
          {isCustomUrl ? (
            <TextField textFieldRef={customUrl} placeholderTextField="mysite" legendTextField="Write a custom name" />
          ) : null}
        </form>
        <p
          className="ml-auto my-2 mr-2 cursor-pointer hover:text-primary"
          onClick={() => {
            if (!isCustomUrl) setIsCustomUrl(true);
            else setIsCustomUrl(false);
            setError(null);
          }}
        >
          {!isCustomUrl ? "Customize URL" : "Default URL"}
        </p>
        {isResult ? <Clipboard url={url} /> : null}
      </div>
    </div>
  );
};

export default Shortener;
