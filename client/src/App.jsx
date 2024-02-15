import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import UrlPage from "./pages/UrlPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import "./index.css";

export const context = createContext();

const App = () => {
  const [error, setError] = useState(null);
  const [deleteUrl, setDeleteUrl] = useState(false);

  return (
    <context.Provider
      value={{
        error,
        setError,
        deleteUrl,
        setDeleteUrl,
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
