import { instance } from "./instance.axios.js";

export const shorterUrl = async url => {
  try {
    const res = await instance.post("/create", { url: url });
    return res.data;
  } catch (error) {
    return error.response.data.error.errors[0];
  }
};

export const shorterCustomUrl = async (url, customUrl) => {
  try {
    const res = await instance.post("/create-custom", { url: url, customUrl: customUrl });
    return res.data;
  } catch (error) {
    return error.response.data.error.errors[0];
  }
};

export const redirectTo = url =>
  fetch(`http://localhost:3000/${url}`)
    .then(res => res.json())
    .then(res => {
      if (res.url) return (window.location.href = res.url);
      else return (window.location.href = "/urlexpress/not-found");
    });

export const validateContactEmail = (email, subject, message) =>
  fetch("http://localhost:3000/api/validate-contact-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, subject, message }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) return res.error.errors[0];
    });
