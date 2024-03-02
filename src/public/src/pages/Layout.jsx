import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-dark py-5 h-fit">
        <div className="responsive-container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src="/assets/urlexpress.ico" alt="" width={50} />
            </Link>
            <h1 className="text-white text-2xl">URLExpress</h1>
          </div>
          <Link to="/urlexpress/about" className="text-white">
            About
          </Link>
        </div>
      </header>
      <main className="responsive-container min-h-screen">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-5">
        <div className="responsive-container flex justify-between items-center">
          <div className="flex flex-col gap-2 items-center">
            <p>Created by MarcMartinezDev</p>
            <div className="flex gap-5">
              <a href="https://github.com/MarcMartinezDev" target="_blank">
                <i className="fa-brands fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/marc-martinez-her/" target="_blank">
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="flex gap-5">
            <Link to="/urlexpress/about" reloadDocument className="text-white">
              About
            </Link>
            <span>|</span>
            <p>Report URL</p>
            <span>|</span>
            <Link to="/urlexpress/contact" reloadDocument className="text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
