import { Router } from "express";
import Url from "../models/url.js";

const router = Router();

router.post("/create", async (req, res) => {
  const { url, customUrl } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 6);

  const urlExists = await Url.findOne({ url });

  if (urlExists) {
    const customUrlExists = await Url.findOne({ customUrl: customUrl });
    if (customUrlExists) return res.status(400).json({mess:"custom url already exists"});
    if(!customUrl) return res.status(400).json(urlExists.uniqueUrl);
    // add the custom url to the array of custom urls
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
    customUrl: customUrl == "" ? shortUrl : [shortUrl, customUrl],
  });

  await newUrl.save();

  res.send(newUrl);
});

router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
