import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import UrlPage from "./pages/UrlPage.jsx";
import HomePage from "./pages/HomePage.jsx";

export const context = createContext();

const App = () => {
  const [shortUrl, setShortUrl] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  return (
    <context.Provider
      value={{
        shortUrl,
        setShortUrl,
        url,
        setUrl,
        error,
        setError,
        setOptions,
        options,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:url" element={<UrlPage />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};
export default App;
