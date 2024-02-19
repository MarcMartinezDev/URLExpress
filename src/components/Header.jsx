import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState("shortener");

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex gap-2 items-center">
        <img src="/qs&qr.png" alt="Logo of QS&QR Generator" width={40} />
        <div>
          <h1 className="text-xl font-bold">QS&QR Generator</h1>
          <p className="text-gray-400">Quick Shortener & QR Generator</p>
        </div>
      </div>
      <div className="flex gap-6">
        <p
          className={isActive === "shortener" ? "menu-header-active" : "menu-header"}
          onClick={() => setIsActive("shortener")}
        >
          Shortener
        </p>
        <p
          className={isActive === "qrGenerator" ? "menu-header-active" : "menu-header"}
          onClick={() => setIsActive("qrGenerator")}
        >
          QrGenerator
        </p>
        <p className={isActive === "about" ? "menu-header-active" : "menu-header"} onClick={() => setIsActive("about")}>
          About
        </p>
      </div>
    </div>
  );
};

export default Header;
