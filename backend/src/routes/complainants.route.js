import express from "express";
import { fetchPhoneNumber } from "../controllers/complainants.controller.js";


const router = express.Router();


router.get("/:phoneNumber", fetchPhoneNumber);


export default router;