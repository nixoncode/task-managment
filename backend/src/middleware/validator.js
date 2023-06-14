import { validationResult } from "express-validator";
import validationErrorsExtractor from "../utils/validationErrorsExtractor.js";

export default function validator(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({
    message: "validation failed",
    errors: validationErrorsExtractor(errors),
  });
}
