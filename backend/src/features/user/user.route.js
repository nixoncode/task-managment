import { Router } from "express";
import { userInfo } from "./user.handler.js";
import verifyJwt from "../../middleware/verifyJwt.js";

const router = Router();

router.get("/me", verifyJwt, userInfo);

export default router;
