import { Router } from "express";
import Url from "../models/url.js";

const router = Router();
router.get("/:url", async (req, res) => {
  const { url } = req.params;

  const urlExists = await Url.findOne({ $or: [{ shortUrl: url }, { customUrl: url }] });
  if (!urlExists) return res.status(404).json({ message: "Url not found" });

  res.json(urlExists);
});

export default router;
