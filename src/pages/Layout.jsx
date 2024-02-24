import { Outlet } from "react-router-dom";
import { context } from "../App";
import { useContext } from "react";
import Footer from "../components/Footer";
import Results from "../components/Results";

const Layout = () => {
  const { isModalOpen } = useContext(context);

  return (
    <>
      <header className="bg-dark py-5">
        <div className="responsive-container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/svg/short-hema.svg" alt="" width={50} />
            <h1 className="text-white">Name project</h1>
          </div>
          <p className="text-white">About</p>
        </div>
      </header>
      <main className="responsive-container">
        {isModalOpen ? <Results /> : null}
        <section className={isModalOpen ? "pointer-events-none : opacity-20" : ""}>
          <Outlet />
        </section>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
