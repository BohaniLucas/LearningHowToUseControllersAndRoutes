///send/details
 import {sql,connectDB} from "../config/db.js";
 import { fileURLToPath } from "url";
 import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const homePage = async (req,res)=>{
    res.sendFile(path.join(__dirname, "..","public","home.html"));
};

export const successPage = async (req,res)=>{
    res.sendFile(path.join(__dirname,"..","public","success.html"));
}

 export const saveUserDetails = async(req,res)=>{
    try{
        const {name,surname,email} = req.body;

        const pool = await connectDB();

        await pool
        .request()
        .input("name" , sql.VarChar, name)
        .input("surname" , sql.VarChar, surname)
        .input("email" , sql.VarChar, email)
        .query(
            `INSERT INTO Details(Name,Surname,Email)
             VALUES (@name,@surname,@email)`
        );

        res.redirect(`/success-message?name=${encodeURIComponent(name)} ${encodeURIComponent(surname)}`);

    }catch(err){
        console.log("Error: " + err);
    }
    
 }