import { body, validationResult } from "express-validator";
import validationErrorsExtractor from "../utils/validationErrorsExtractor.js";

export function createValidationRules() {
  return [
    body("name", "name is required")
      .notEmpty()
      .isString()
      .isLength({ min: 3, max: 60 })
      .withMessage("name should be at least 3 to 60 characters long"),

    body("phone_number")
      .notEmpty()
      .isMobilePhone("en-KE")
      .withMessage("phone number is not a valid mobile number"),

    body("email")
      .notEmpty()
      .isEmail()
      .isLength({ max: 100 })
      .withMessage("email should be a valid email"),

    body("subject")
      .notEmpty()
      .isString()
      .isLength({ min: 6, max: 255 })
      .withMessage("subject is required and should be between 6 and 255 characters"),

    body("description")
      .notEmpty()
      .withMessage("description is required")
      .isLength({ min: 6 })
      .withMessage("description should be at least 6 characters long"),

    body("category_id")
      .notEmpty()
      .withMessage("category is required")
      .isNumeric()
      .withMessage("Please select a category from the list"),
  ];
}

export function createValidator(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  console.log(errors);

  return res.status(422).json({
    message: "validation failed",
    errors: validationErrorsExtractor(errors),
  });
}