import { useContext } from "react";
import { context } from "../App";
import Shortener from "../components/Shortener";
import QrGenerator from "../components/QrGenerator";
import Card from "../components/Card";

const Home = () => {
  const { menuActive, setMenuActive } = useContext(context);

  return (
    <div className="grid grid-cols-1 gap-14">
      <div>
        <div className="flex">
          <p className={menuActive === "short" ? "menu-active" : "menu"} onClick={() => setMenuActive("short")}>
            Short Url
          </p>
          <p className={menuActive === "qrcode" ? "menu-active" : "menu"} onClick={() => setMenuActive("qrcode")}>
            QR Generator
          </p>
        </div>
        <div className="p-10 shadow-md shadow-slate-300 min-h-[400px] bg-white">
          {menuActive === "short" ? <Shortener /> : menuActive === "qrcode" ? <QrGenerator /> : null}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <Card
          cardImage="/svg/simple-like.svg"
          altImg="easy use image"
          cardDescription="An intuitive and
          easy-to-use tool that allows you to reduce the length of your URLs"
        />
        <Card
          cardImage="/svg/link.svg"
          altImg="easy use image"
          cardDescription="Use any link, no matter what size, URLExpress always shortens"
        />
        <Card
          cardImage="/svg/time.svg"
          altImg="easy use image"
          cardDescription="Use any link, no matter what size, ShortURL always shortens"
        />
        <Card
          cardImage="/svg/devices.svg"
          altImg="easy use image"
          cardDescription="Responsive design, compatible with different devices and screen sizes to offer an optimal experience"
        />
      </div>
    </div>
  );
};

export default Home;
