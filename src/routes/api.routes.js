import { Router } from "express";
import Url from "../models/url.js";

const router = Router();

router.post("/create", async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "url is required" });

  const randomUrl = Math.random().toString(36).substring(2, 6);

  const newUrl = new Url({
    url,
    shortUrl: randomUrl,
  });

  await newUrl.save();
  return res.json(newUrl.shortUrl);
});

router.delete("/delete", async (req, res) => {
  const { shortUrl } = req.body;

  await Url.deleteOne({ shortUrl });
  res.json({ message: "Url deleted" });
});

router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
