import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useRef } from "react";
import UrlPage from "./pages/UrlPage.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./pages/Layout.jsx";
import "./index.css";

export const context = createContext();

const App = () => {
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuActive, setMenuActive] = useState("shortener");
  const [url, setUrl] = useState("");
  const qrModalDiv = useRef();

  return (
    <context.Provider
      value={{
        error,
        setError,
        isModalOpen,
        setIsModalOpen,
        qrModalDiv,
        url,
        setUrl,
        menuActive,
        setMenuActive,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/api/404" element={<NotFound />} />
          </Route>
          <Route path="/:url" element={<UrlPage />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};
export default App;
