import { Router } from "express";
import fs from "fs";
import Url from "../models/url.js";

const router = Router();

router.post("/create", async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "url is required" });

  const regExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!regExp.test(url)) return res.status(400).json({ error: "Invalid url" });

  const randomUrl = Math.random().toString(36).substring(2, 6);

  const newUrl = new Url({
    url,
    shortUrl: randomUrl,
  });

  await newUrl.save();
  return res.json(newUrl.shortUrl);
});

router.post("/create-custom", async (req, res) => {
  const { url, customUrl } = req.body;

  if (!url) return res.status(400).json({ error: "url is required" });
  if (!customUrl) return res.status(400).json({ error: "customUrl is required" });

  const customUrlExists = await Url.findOne({ customUrl });
  if (customUrlExists) return res.status(400).json({ error: "custom url is already in use" });

  const regExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!regExp.test(url)) return res.status(400).json({ error: "Invalid url" });

  const newUrl = new Url({
    url,
    customUrl,
  });

  await newUrl.save();
  return res.json(newUrl.customUrl);
});

/*
 * admin routes
 **/
router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
