import Url from "../models/url.js";

export const createUrlController = async (req, res) => {
  const { url } = req.body;

  const randomUrl = Math.random().toString(36).substring(2, 6);

  const newUrl = new Url({
    url,
    shortUrl: randomUrl,
  });

  await newUrl.save();
  return res.json(newUrl.shortUrl);
};

export const createCustomUrlController = async (req, res) => {
  const { url, customUrl } = req.body;

  const newUrl = new Url({
    url,
    customUrl,
  });

  await newUrl.save();
  return res.json(newUrl.customUrl);
};

export const redirectController = async (req, res) => {
  const { url } = req.params;

  const urlExists = await Url.findOne({
    $or: [{ shortUrl: url }, { customUrl: url }],
  });
  if (!urlExists) return res.status(404).json({ message: "Url not found" });

  res.json(urlExists);
};

export const contactFormController = (req, res) => {
  res.json({ message: "Succes" });
};
