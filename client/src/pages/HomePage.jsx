import { createShortUrl } from "../api/requests.js";
import { useRef, useState, useContext } from "react";
import { context } from "../App.jsx";
import TextField from "../components/TextField.jsx";
import Button from "../components/Button.jsx";
import Clipboard from "../components/Clipboard.jsx";

const HomePage = () => {
  const inputUrl = useRef();
  const [data, setData] = useState();
  const { error, setError, setDeleteUrl } = useContext(context);

  const handleSubmit = async e => {
    e.preventDefault();
    await createShortUrl(inputUrl.current.value)
      .then(res => res.json())
      .then(res => {
        if (res.error) setError(res.error);
        else {
          setData(res);
          setDeleteUrl(false);
        }
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="flex gap-1 mt-10">
        <TextField
          textFieldRef={inputUrl}
          placeholderTextField="Copy an URL here"
        />
        <Button textButton="Shorter" typeButton="submit" />
      </form>
      {error ? <p className="text-red-500 text-md ml-5">{error}</p> : null}
      {data ? <Clipboard url={data} /> : null}
    </div>
  );
};

export default HomePage;
