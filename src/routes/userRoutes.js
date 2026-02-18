// /send/details
import { saveUserDetails,homePage,successPage } from "../controllers/userDetails.js";
import express from "express";

const router = express.Router();

router.post("/send/details",saveUserDetails);

router.get("/",homePage);

router.get("/success-message",successPage)

export default router;

