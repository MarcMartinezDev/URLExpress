export const createShortUrl = (url) =>
  fetch("http://localhost:3000/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  export const createCustomUrl = (url, customUrl) =>
  fetch("http://localhost:3000/api/create-custom", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, customUrl }),
  });
 

export const redirectTo = (url) => fetch(`http://localhost:3000/${url}`);
