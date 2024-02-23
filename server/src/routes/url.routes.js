import { Router } from "express";
import { createUrlController, createCustomUrlController, redirectController } from "../controllers/url.controller.js";
import { validateUrl, validateCustomUrl } from "../validators/urls.js";
import Url from "../models/url.js";

const router = Router();

//router.get('/', createUrlController);
router.post("/api/create", validateUrl, createUrlController);
router.post("/api/create-custom", validateCustomUrl, createCustomUrlController);
router.get("/:url", redirectController);

/*
 * admin routes
 **/
router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
