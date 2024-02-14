import { Router } from "express";
import Url from "../models/url.js";

const router = Router();

router.post("/create", async (req, res) => {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 6);

  const urlExists = await Url.findOne({ url });

  if (urlExists) return res.send(urlExists);

  const newUrl = new Url({
    url,
    uniqueUrl: shortUrl,
  });

  await newUrl.save();
  res.send(newUrl);
});

router.post("/create-custom", async (req, res) => {
  const { url, customUrl } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 6);

  const urlExists = await Url.findOne({ url });
  const customUrlExists = await Url.findOne({ customUrl });

  if (customUrlExists) return res.status(400).json({ error: "custom url already exists" });

  if (urlExists) {
    const updateUrl = await Url.findOneAndUpdate(
      { url: urlExists.url },
      { $push: { customUrl: customUrl } },
      { new: true }
    );
    updateUrl.save();
    return res.send(updateUrl);
  }

  const newUrl = new Url({
    url,
    uniqueUrl: shortUrl,
    customUrl,
  });

  await newUrl.save();
  res.send(newUrl);
});

router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
