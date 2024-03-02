import React from "react";
import { useParams } from "react-router-dom";
import { redirectTo } from "../api/requests";

const UrlPage = () => {
  const { url } = useParams();

  redirectTo(url);

  return <></>;
};

export default UrlPage;
