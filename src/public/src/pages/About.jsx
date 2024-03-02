import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:text-lg flex flex-col gap-12">
      <div className="flex items-center">
        <img src="/svg/short-hema.svg" alt="" width={50} />
        <h2>URLExpress</h2>
      </div>

      <p>
        Welcome to URLExpress, fast and efficient solution to simplify web links and generate QR
        codes. An intuitive and easy-to-use tool that allows you to reduce the length of your URLs,
        making them more manageable and user-friendly.
      </p>
      <img src="/assets/svg/simple-like.svg" width={120} alt="" className="m-auto" />
      <p>
        Simplicity at its Finest: With an easy-to-understand interface, shortening links has been
        simpler. Just copy and paste your original URL, and in seconds you'll have your shortened
        link ready to share!
      </p>
      <img src="/assets/svg/write.svg" alt="" width={130} className="m-auto" />
      <p>
        Personalization: Give your shortened links a personal touch with our link customization
        feature. Choose meaningful, easy-to-remember names to make your links stand out.
      </p>
      <h2>What's important ?</h2>
      <p>
        You should know that URLExpress is a project in development and therefore incomplete, there
        may be some bugs in it. For that reason, it would be helpful if you report any problems or
        recommendations
      </p>
      <p className="p-2 bg-semiLight shadow-md text-center my-10">
        You can write to me in the{" "}
        <Link to="/urlexpress/contact" reloadDocument className="text-semiDark">
          contact form
        </Link>{" "}
        or in{" "}
        <a target="_blank" href="https://github.com/MarcMartinezDev" className=" text-semiDark">
          GitHub
        </a>
      </p>
    </div>
  );
};

export default About;
