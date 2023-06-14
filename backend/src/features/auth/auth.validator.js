import { body } from "express-validator";

export function registerValidationRules() {
  return [
    body("name", "name is required")
      .notEmpty()
      .isString()
      .isLength({ min: 3, max: 60 })
      .withMessage("name should be at least 3 to 60 characters long"),

    body("phone", "phone is required")
      .notEmpty()
      .isMobilePhone("en-KE")
      .withMessage("phone number is not a valid mobile number"),

    body("email")
      .notEmpty()
      .isEmail()
      .isLength({ max: 100 })
      .withMessage("email should be a valid email"),

    body("password", "password should be at least 8 characters long")
      .notEmpty()
      .isLength({ min: 8 }),
  ];
}
