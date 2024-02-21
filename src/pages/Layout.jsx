import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-48 w-full">
        <Outlet />
      </main>
      <footer className="w-full absolute top-full">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
