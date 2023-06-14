import { Router } from "express";
import { userInfo } from "./user.handler.js";

const router = Router();

router.get("/me", userInfo);

export default router;
