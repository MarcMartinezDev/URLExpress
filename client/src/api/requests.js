export const createShortUrl = url =>
  fetch("http://localhost:3000/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) return res.error.errors[0];
      else return res;
    });

export const createCustomUrl = (url, customUrl) =>
  fetch("http://localhost:3000/api/create-custom", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, customUrl }),
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) return res.error.errors[0];
      else return res;
    });

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
