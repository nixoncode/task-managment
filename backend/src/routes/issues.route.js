import express from "express";
import { create } from "../controllers/issues.controller.js";
import { createValidationRules, createValidator } from "../validators/issues.validator.js";

const router = express.Router();


router.post("/", createValidationRules(), createValidator, create);


export default router;