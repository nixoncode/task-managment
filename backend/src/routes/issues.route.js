import express from "express";
import { create } from "../controllers/issues.controller.js";

const router = express.Router();


router.post("/", create);


export default router;