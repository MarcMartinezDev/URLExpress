import Button from "@mui/material/Button";
import { createShortUrl } from "../api/requests.js";
import { useState, useRef, useContext } from "react";
import { context } from "../App.jsx";
import TextFieldInput from "../components/TextFieldInput.jsx";

const HomePage = () => {
  const inputUrl = useRef(null);
  const inputCustomPath = useRef(null);
  const { shortUrl, setShortUrl, url, setUrl, error, setError } = useContext(context);

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!inputUrl.current.value) {
      setError(true);
      return;
    }
    await createShortUrl(inputUrl.current.value, inputCustomPath.current.value)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShortUrl(data.shortUrl + data.customUrl);
      });
    setError(false);
  };

  return (
    <form onSubmit={handleSumbit}>
      <TextFieldInput 
        textFieldRef={inputUrl}
        textFieldError={error}
        textFieldErrorMessage="Please write an url"
      />
      <Button type="submit" variant="contained" color="secondary">
        Get short url
      </Button>
      <TextFieldInput 
        textFieldRef={inputCustomPath}
        textFieldError={error}
        textFieldErrorMessage="Please write an url"
      />
    </form>
  );
};

export default HomePage;
