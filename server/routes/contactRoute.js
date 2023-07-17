import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { createContactConstroller } from "../controllers/contactController.js";

const router = express.Router();
//routes
router.post("/create-contact", requireSignIn, createContactConstroller);

export default router;
