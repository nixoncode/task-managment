import { Router } from "express";
import { login, register, userInfo } from "./auth.handlers.js";
import {
  loginValidationRules,
  registerValidationRules,
} from "./auth.validator.js";
import validator from "../../middleware/validator.js";

const router = Router();

router.post("/register", registerValidationRules(), validator, register);
router.post("/login", loginValidationRules(), validator, login);
router.get("/info", userInfo);

export default router;
