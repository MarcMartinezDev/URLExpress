import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import UrlPage from "./pages/UrlPage.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ReportUrl from "./pages/ReportUrl.jsx";
import "./index.css";

export const context = createContext();

const App = () => {
  const [error, setError] = useState(null);
  const [isResults, setIsResults] = useState(false);
  const [menuActive, setMenuActive] = useState("short");
  const [url, setUrl] = useState("");

  return (
    <context.Provider
      value={{
        error,
        setError,
        isResults,
        setIsResults,
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
            <Route path="/urlexpress/not-found" element={<NotFound />} />
            <Route path="/urlexpress/about" element={<About />} />
            <Route path="/urlexpress/contact" element={<Contact />} />
            <Route path="/urlexpress/report-url" element={<ReportUrl />} />
          </Route>
          <Route path="/:url" element={<UrlPage />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};
export default App;
