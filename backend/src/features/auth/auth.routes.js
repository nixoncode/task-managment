import { Router } from "express";
import { login } from "./auth.handlers.js";

const router = Router();

router.post("/login", login);

export default router;
