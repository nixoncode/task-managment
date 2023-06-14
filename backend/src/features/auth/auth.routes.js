import { Router } from "express";
import { login, register } from "./auth.handlers.js";
import { registerValidationRules } from "./auth.validator.js";
import validator from "../../middleware/validator.js";

const router = Router();

router.post("/register", registerValidationRules(), validator, register);
router.post("/login", login);

export default router;
