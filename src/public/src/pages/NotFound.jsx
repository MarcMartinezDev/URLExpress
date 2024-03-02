import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col text-lg gap-10">
      <div className="flex items-center gap-5">
        <i className="fa-solid fa-otter scale-150"></i>
        <h1 className="text-xl">Error 404</h1>
      </div>
      <p>
        Sorry, we couldn't find the website...{" "}
        <Link className="text-purple-600" to="/">
          Try again
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
