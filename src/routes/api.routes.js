import { Router } from "express";
import Url from "../models/url.js";

const router = Router();

router.post("/create", async (req, res) => {
  const { url, customUrl } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 5);

  const urlExists = await Url.findOne({ url });
  if (urlExists.customUrl === customUrl) {
    const updateUrl = Url.findOneAndUpdate(
      { customUrl: urlExists.customUrl },
      { customUrl: [...urlExists.customUrl, customUrl] },
      { new: true }
    );
    updateUrl.save();
  }

  const newUrl = new Url({
    url,
    shortUrl,
    customUrl: customUrl || null,
  });

  await newUrl.save();

  res.send(newUrl);
});

router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
