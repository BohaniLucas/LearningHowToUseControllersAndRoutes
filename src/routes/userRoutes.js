// /send/details
import { saveUserDetails } from "../controllers/userDetails.js";
import express from "express";
import {fileURLToPath} from "url";
import path from "path";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);

router.post("/details" , saveUserDetails);

router.get("/home", (req,res)=>{
    
});

export default router;

