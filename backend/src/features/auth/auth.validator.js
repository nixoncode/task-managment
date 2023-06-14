import { body } from "express-validator";
import { emailExists, phoneExists } from "./auth.model.js";

const passwordRule = body(
  "password",
  "password should be at least 8 characters long",
)
  .notEmpty()
  .isLength({ min: 8 });

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
      .withMessage("phone number is not a valid mobile number")
      .custom(async value => {
        const user = await phoneExists(value);
        if (user) {
          throw new Error("Phone number already in use");
        }
      }),
    body("email")
      .notEmpty()
      .isEmail()
      .isLength({ max: 100 })
      .withMessage("email should be a valid email")
      .custom(async value => {
        const user = await emailExists(value);
        if (user) {
          throw new Error("E-mail already in use");
        }
      }),
    passwordRule,
  ];
}

export function loginValidationRules() {
  return [
    body("email")
      .notEmpty()
      .isEmail()
      .isLength({ max: 100 })
      .withMessage("email should be a valid email"),
    passwordRule,
  ];
}
