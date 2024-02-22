import { check, validationResult } from "express-validator";
import Url from "../models/url.js";

export const validateUrl = [
  check("url")
    .exists()
    .notEmpty()
    .withMessage("Url cannot be empty")
    .custom(value => {
      const regExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      if (!regExp.test(value)) {
        throw new Error("Invalid URL");
      }
      return true;
    }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(403).send({ error: error });
    }
  },
];

export const validateCustomUrl = [
  check("url")
    .exists()
    .notEmpty()
    .withMessage("Url cannot be empty")
    .custom(value => {
      const regExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      if (!regExp.test(value)) {
        throw new Error("Invalid URL");
      }
      return true;
    }),
  check("customUrl")
    .exists()
    .notEmpty()
    .withMessage("Custom URL cannot be empty")
    .custom(async value => {
      const customUrlExists = await Url.findOne({ customUrl: value });
      if (customUrlExists) {
        throw new Error("Custom URL is already in use");
      }
      return true;
    }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(403).send({ error: error });
    }
  },
];
