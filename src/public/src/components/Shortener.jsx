import React from "react";
import Results from "./Results.jsx";
import TextField from "./TextField.jsx";
import Button from "./Button.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import { shorterUrl, shorterCustomUrl } from "../api/requests.js";
import { useRef, useContext, useState } from "react";
import { context } from "../App.jsx";

const Shortener = () => {
  const inputUrl = useRef();
  const customUrl = useRef();
  const { error, setError, setIsResults, setUrl, isResults } = useContext(context);
  const [isCustomUrl, setIsCustomUrl] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const res = !isCustomUrl
      ? await shorterUrl(inputUrl.current.value)
      : await shorterCustomUrl(inputUrl.current.value, customUrl.current.value);
    if (res.msg) return setError(res.msg);
    else setUrl(res);

    setIsResults(true);
  };

  return (
    <div className="flex flex-col text-center">
      <h2 className="mb-5">Short URL</h2>
      {!isResults ? (
        <p className="mb-5">Copy and share your url</p>
      ) : (
        <p className="mb-5">
          Welcome to URLExpress, fast and efficient solution to simplify web links and generate QR
          codes.
        </p>
      )}

      {!isResults ? (
        <Results />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          <div className="flex items-end">
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
        </form>
      )}
    </div>
  );
};

export default Shortener;
