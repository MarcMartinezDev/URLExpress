import { Router } from "express";
import {
  createUrlController,
  createCustomUrlController,
  redirectController,
  contactFormController,
} from "../controllers/url.controllers.js";
import { validateUrl, validateCustomUrl } from "../validators/url.validators.js";
import { validateContactForm } from "../validators/contact-form.validators.js";

//Routes
const router = Router();

router.get("/:url", redirectController);
router.post("/api/create", validateUrl, createUrlController);
router.post("/api/create-custom", validateCustomUrl, createCustomUrlController);
router.post("/api/validate-contact-form", validateContactForm, contactFormController);

export default router;
