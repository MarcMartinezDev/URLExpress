import { Router } from "express";
import {
  createUrlController,
  createCustomUrlController,
  redirectController,
  contactFormController,
} from "../controllers/url.controller.js";
import { validateUrl, validateCustomUrl } from "../validators/url.validators.js";
import { validateContactForm } from "../validators/contact-form.validators.js";
import Url from "../models/url.js";

const router = Router();

router.get("/:url", redirectController);
router.post("/api/create", validateUrl, createUrlController);
router.post("/api/create-custom", validateCustomUrl, createCustomUrlController);
router.post("/api/validate-contact-form", validateContactForm, contactFormController);

/*
 * admin routes
 **/
router.get("/admin/delete", async (req, res) => {
  await Url.deleteMany({});
  res.json({ message: "All urls deleted" });
});

export default router;
