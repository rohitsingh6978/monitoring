import express from "express";
import { handleScheduling } from "./controller.js";
const router = express.Router();

router.post("/handleScheduling",handleScheduling)

export default router;