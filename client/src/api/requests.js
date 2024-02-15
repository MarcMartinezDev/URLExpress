export const createShortUrl = url =>
  fetch("http://localhost:3000/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

export const deleteShortUrl = shortUrl =>
  fetch(`http://localhost:3000/api/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shortUrl }),
  });

export const redirectTo = url => fetch(`http://localhost:3000/${url}`);
