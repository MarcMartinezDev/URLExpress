import { useRef, useState } from "react";
import { downloadQrcode } from "../utils/app.utils.js";
import { createQrcode } from "../utils/app.utils.js";
import Button from "./Button.jsx";
import TextField from "./TextField";
import ErrorMessage from "./ErrorMessage.jsx";

const QrGenerator = () => {
  const inputQrcodeRef = useRef();
  const imgRef = useRef();
  const [isQrcode, setIsQrcode] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    const regExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    e.preventDefault();
    if (regExp.test(inputQrcodeRef.current.value)) {
      createQrcode(inputQrcodeRef.current.value, imgRef);
      setIsQrcode(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const download = () => {
    downloadQrcode(imgRef.current.src);
  };

  return (
    <>
      {error ? <ErrorMessage message="Please write a correct URL" /> : null}
      <form className="flex gap-2 mb-10" onSubmit={handleSubmit}>
        <TextField
          textFieldRef={inputQrcodeRef}
          placeholderTextField="https://www.yoursite.com"
          legendTextField="Copy an url"
        />
        <img
          className="p-1 m-auto bg-white cursor-pointer hover:bg-primary transition-all"
          src="img/qr-code.png"
          alt=""
          width={50}
          onClick={handleSubmit}
        />
      </form>
      <div className="flex items-center justify-center gap-10">
        <img src="" alt="" ref={imgRef} width={150} />
        {isQrcode ? (
          <div className="flex flex-col gap-5">
            <Button textButton="Download" clickEvent={download} />
            <Button textButton="Share" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default QrGenerator;
