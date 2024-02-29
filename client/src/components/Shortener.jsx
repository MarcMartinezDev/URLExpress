import { createShortUrl, createCustomUrl } from "../api/requests.js";
import { useRef, useContext, useState } from "react";
import { context } from "../App.jsx";
import Results from "./Results.jsx";
import TextField from "./TextField.jsx";
import Button from "./Button.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const Shortener = () => {
  const inputUrl = useRef();
  const customUrl = useRef();
  const { error, setError, setIsResults, setUrl, isResults } = useContext(context);
  const [isCustomUrl, setIsCustomUrl] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isCustomUrl) {
      const res = await createShortUrl(inputUrl.current.value);
      if (res.msg) return setError(res.msg);
      else setUrl(res);
    } else {
      const res = await createCustomUrl(inputUrl.current.value, customUrl.current.value);
      if (res.msg) return setError(res.msg);
      else setUrl(res);
    }
    setIsResults(true);
  };

  return isResults ? (
    <Results />
  ) : (
    <div className="flex flex-col text-center">
      <h2 className="mb-5">Short URL</h2>
      <p className="mb-10">
        Welcome to URLExpress, fast and efficient solution to simplify web links and generate QR
        codes.
      </p>
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
        <div className="flex gap-1">
          <TextField
            refTextField={inputUrl}
            placeholderTextField="https://www.yoursite.com"
            legendTextField="Copy an url"
          />
          <Button textButton="Short" typeButton="submit" styles="w-1/4" />
        </div>
        {isCustomUrl ? (
          <div>
            <TextField
              refTextField={customUrl}
              placeholderTextField="mysite"
              legendTextField="Write a custom name"
            />
          </div>
        ) : null}
      </form>
      <div className="relative flex items-end">
        {error ? <ErrorMessage message={error} /> : null}
        <p
          className="ml-auto my-2 mr-2 cursor-pointer hover:text-regular"
          onClick={() => {
            if (!isCustomUrl) setIsCustomUrl(true);
            else setIsCustomUrl(false);
            setError(null);
          }}
        >
          {!isCustomUrl ? "Add name" : "Quit"}
        </p>
      </div>
    </div>
  );
};

export default Shortener;
