import { useContext } from "react";
import { context } from "../App";
import Shortener from "../components/Shortener";
import QrGenerator from "../components/QrGenerator";
import Card from "../components/Card";

const Home = () => {
  const { menuActive } = useContext(context);

  return (
    <>
      <section className="flex flex-col gap-32 ">
        {menuActive === "shortener" ? <Shortener /> : menuActive === "qrGenerator" ? <QrGenerator /> : null}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">
          <Card
            cardImage="/img/facil.png"
            altImg="easy use image"
            cardDescription="ShortURL is easy and fast, enter the long link to get your shortened link"
          />
          <Card
            cardImage="/img/shortened.png"
            altImg="easy use image"
            cardDescription="Use any link, no matter what size, ShortURL always shortens"
          />
          <Card
            cardImage="/img/shortened.png"
            altImg="easy use image"
            cardDescription="Use any link, no matter what size, ShortURL always shortens"
          />
          <Card
            cardImage="/img/shortened.png"
            altImg="easy use image"
            cardDescription="Use any link, no matter what size, ShortURL always shortens"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
