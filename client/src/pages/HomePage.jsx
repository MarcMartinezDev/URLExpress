import { createShortUrl } from "../api/requests.js";
import { useRef, useContext } from "react";
import { context } from "../App.jsx";
import TextField from "../components/TextField.jsx";
import Button from "../components/Button.jsx";
import Clipboard from "../components/Clipboard.jsx";
import QrModal from "../components/modals/QrModal.jsx";
import ShareModal from "../components/modals/ShareModal.jsx";

const HomePage = () => {
  const inputUrl = useRef();
  const { error, setError, isQrModalOpen, isShareModalOpen, setIsQrModalOpen, setIsShareModalOpen, url, setUrl } =
    useContext(context);

  const handleSubmit = async e => {
    e.preventDefault();
    await createShortUrl(inputUrl.current.value)
      .then(res => res.json())
      .then(res => {
        if (res.error) setError(res.error);
        else {
          setUrl(res);
        }
      });
  };

  return (
    <div
      className="relative flex flex-col justify-center w-5/6 md:w-3/4 lg:w-1/2 m-auto h-screen"
      onClick={() => {
        if (isQrModalOpen) setIsQrModalOpen(false);
        if (isShareModalOpen) setIsShareModalOpen(false);
      }}
    >
      <QrModal />
      <ShareModal />
      <div className={isQrModalOpen || isShareModalOpen ? " pointer-events-none opacity-30" : null}>
        {error ? <p className="text-red-500 text-md ml-5">{error}</p> : null}
        <form onSubmit={handleSubmit} className="flex gap-1 mt-10">
          <TextField textFieldRef={inputUrl} placeholderTextField="Copy an URL here" />
          <Button textButton="Shorter" typeButton="submit" />
        </form>
        {url ? <Clipboard url={url} /> : null}
      </div>
    </div>
  );
};

export default HomePage;
