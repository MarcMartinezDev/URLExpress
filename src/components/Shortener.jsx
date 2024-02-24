import { createShortUrl, createCustomUrl } from "../api/requests.js";
import { useRef, useContext, useState } from "react";
import { context } from "../App.jsx";
import TextField from "./TextField.jsx";
import Button from "./Button.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const Shortener = () => {
  const inputUrl = useRef();
  const customUrl = useRef();
  const { error, setError, setIsModalOpen, setUrl } = useContext(context);
  const [isCustomUrl, setIsCustomUrl] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isCustomUrl) {
      await createShortUrl(inputUrl.current.value)
        .then(res => res.json())
        .then(res => {
          if (res.error) setError(res.error.errors[0]);
          else {
            setUrl(res);
            setIsModalOpen(true);
          }
        });
    } else {
      await createCustomUrl(inputUrl.current.value, customUrl.current.value)
        .then(res => res.json())
        .then(res => {
          if (res.error) setError(res.error.errors[0]);
          else {
            setUrl(res);
            setIsModalOpen(true);
          }
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col text-center">
        <h2 className="mb-5">Shorter URL</h2>
        <p className="mb-10">
          ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to create a shortened
          link making it easy to share{" "}
        </p>
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
          <div className="flex gap-1">
            <TextField
              textFieldRef={inputUrl}
              placeholderTextField="https://www.yoursite.com"
              legendTextField="Copy an url"
            />
            <Button textButton="Short" typeButton="submit" styles="w-1/4" />
          </div>
          {isCustomUrl ? (
            <div>
              <TextField textFieldRef={customUrl} placeholderTextField="mysite" legendTextField="Write a custom name" />
            </div>
          ) : null}
        </form>
        <div className="relative flex items-end">
          {error ? <ErrorMessage message={error.msg} /> : null}
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
    </div>
  );
};

export default Shortener;
