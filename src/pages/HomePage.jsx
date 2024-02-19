import { createShortUrl, createCustomUrl } from "../api/requests.js";
import { useRef, useContext, useState } from "react";
import { context } from "../App.jsx";
import TextField from "../components/TextField.jsx";
import Button from "../components/Button.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Clipboard from "../components/Clipboard.jsx";
import QrModal from "../components/modals/QrModal.jsx";
import ShareModal from "../components/modals/ShareModal.jsx";

const HomePage = () => {
  const inputUrl = useRef();
  const customUrl = useRef();
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
          }
        });
    } else {
      await createCustomUrl(inputUrl.current.value, customUrl.current.value)
        .then(res => res.json())
        .then(res => {
          if (res.error) setError(res.error);
          else {
            setUrl(res);
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
            <Button textButton="Short" typeButton="submit" />
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
        {url ? <Clipboard url={url} /> : null}
      </div>
    </div>
  );
};

export default HomePage;
