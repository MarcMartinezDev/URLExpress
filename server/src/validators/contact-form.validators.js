import { check, validationResult } from "express-validator";

/**
 * Validates the email, subject, and message fields of the contact form.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const validateContactForm = [
  check("email")
    .exists()
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  check("subject").exists().notEmpty().withMessage("Subject cannot be empty"),
  check("message")
    .exists()
    .notEmpty()
    .withMessage("Message cannot be empty")
    .isLength({ max: 255 })
    .withMessage("Message cannot include more than 255 characters"),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(403).send({ error: error });
    }
  },
];
