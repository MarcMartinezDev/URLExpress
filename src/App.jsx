import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useRef } from "react";
import UrlPage from "./pages/UrlPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Layout from "./pages/Layout.jsx";
import "./index.css";

export const context = createContext();

const App = () => {
  const [error, setError] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [url, setUrl] = useState(null);
  const qrModalDiv = useRef();

  return (
    <context.Provider
      value={{
        error,
        setError,
        isQrModalOpen,
        setIsQrModalOpen,
        isShareModalOpen,
        setIsShareModalOpen,
        qrModalDiv,
        url,
        setUrl,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/api/404" element={<PageNotFound />} />
          </Route>
          <Route path="/:url" element={<UrlPage />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};
export default App;
