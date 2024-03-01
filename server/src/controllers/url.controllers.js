import Url from "../models/url.js";

/**
 * Creates a new short URL record in the database
 * @param {object} req - The request object
 * @param {string} req.body.url - The original URL
 * @param {object} res - The response object
 */
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

/**
 * Creates a new short URL with custom name record in the database
 * @param {object} req - The request object
 * @param {string} req.body.url - The original URL
 * @param {string} req.body.customUrl - The custom URL
 * @param {object} res - The response object
 */
export const createCustomUrlController = async (req, res) => {
  const { url, customUrl } = req.body;

  const newUrl = new Url({
    url,
    customUrl,
  });

  await newUrl.save();
  return res.json(newUrl.customUrl);
};

/**
 * Redirects the user to the original URL
 * @param {object} req - The request object
 * @param {string} req.params.url - The shortened or custom URL
 * @param {object} res - The response object
 */
export const redirectController = async (req, res) => {
  const { url } = req.params;

  const urlExists = await Url.findOne({
    $or: [{ shortUrl: url }, { customUrl: url }],
  });
  if (!urlExists) return res.status(404).json({ message: "Url not found" });

  res.json(urlExists);
};

/**
 * Handles the contact form submission
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
export const contactFormController = (req, res) => {
  res.json({ message: "Succes" });
};
