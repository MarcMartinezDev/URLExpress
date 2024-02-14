import { createShortUrl, createCustomUrl } from "../api/requests.js";
import { useRef, useContext, useState } from "react";
import { context } from "../App.jsx";
import TextField from "../components/TextField.jsx";
import Button from "../components/Button.jsx";

const HomePage = () => {
  const inputUrl = useRef();
  const customUrl = useRef();
  const [addCustomName, setAddCustomName] = useState(false);
  const  [data, setData] = useState({});
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputUrl.current.value) {
      setError("Please enter an URL");
      return;
    }
    if (!addCustomName) {
      await createShortUrl(inputUrl.current.value)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    } else {
      if( customUrl.current.value === "") return setError("Please enter a custom URL");
      await createCustomUrl(inputUrl.current.value, customUrl.current.value)
        .then((res) => res.json())
        .then((res) => {
          if(res.error) setError(res.error);
          else setData(res);
        });
      };
  };

  const customNameOption = () => {
    if (addCustomName) {
      setAddCustomName(false);
      return;
    }
    setAddCustomName(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">
        <TextField textFieldRef={inputUrl} placeholderTextField="Copy an URL here" />
        {error ? <p className="text-red-500 text-md">{error}</p> : null}
        {addCustomName ? (
          <>
          <div className="flex items-center gap-x-2">
            <TextField textFieldRef={customUrl} placeholderTextField="Enter a custom name" />
            <Button
              textButton="Remove"
              clickEvent={customNameOption}
              override={
                "w-fit h-fit p-2 px-5 bg-purple-400 rounded-lg shadow-md text-black text-lg hover:bg-purple-600 transition-all"
              }
            />
          </div>
          </>
        ) : (
          <Button textButton="Add a custom name" clickEvent={customNameOption} />
        )}
        <Button textButton="Get short url" typeButton="submit" />
      </form>
      {data.uniqueUrl}
      {data.customUrl}
    </div>
  );
};

export default HomePage;
