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
    <div className="text-center">
      <h2 className="mb-5">QR Generator</h2>
      <p className="mb-10">
        Welcome to URLExpress, fast and efficient solution to simplify web links and generate QR
        codes.
      </p>
      <form className="flex gap-1" onSubmit={handleSubmit}>
        <TextField
          refTextField={inputQrcodeRef}
          placeholderTextField="https://www.yoursite.com"
          legendTextField="Copy an url"
        />
        <Button textButton="Create QR" typeButton="submit" styles="w-1/4" />
      </form>
      {error ? <ErrorMessage message="Please write a correct URL" /> : null}
      <div className="flex items-center justify-center gap-10 mt-10">
        <img src="" alt="" ref={imgRef} width={120} />
        {isQrcode ? (
          <div className="flex flex-col gap-">
            <Button textButton="Download" clickEvent={download} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default QrGenerator;
