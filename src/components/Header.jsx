import { useContext } from "react";
import { context } from "../App";

const Header = () => {
  const { menuActive, setMenuActive } = useContext(context);

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
          className={menuActive === "shortener" ? "menu-header-active" : "menu-header"}
          onClick={() => setMenuActive("shortener")}
        >
          Shortener
        </p>
        <p
          className={menuActive === "qrGenerator" ? "menu-header-active" : "menu-header"}
          onClick={() => setMenuActive("qrGenerator")}
        >
          QrGenerator
        </p>
        <p
          className={menuActive === "about" ? "menu-header-active" : "menu-header"}
          onClick={() => setMenuActive("about")}
        >
          About
        </p>
      </div>
    </div>
  );
};

export default Header;
