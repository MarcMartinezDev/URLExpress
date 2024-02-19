import { useParams } from "react-router-dom";
import { redirectTo } from "../api/requests";
import { useEffect } from "react";

const UrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    const redirect = async () => await redirectTo(url);
    redirect()
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.url) return (window.location.href = data.url);
        else return (window.location.href = "/api/404");
      });
  }, []);

  return <div />;
};

export default UrlPage;
