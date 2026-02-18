///send/details
 import {sql,connectDB} from "../config/db.js";


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
            `INSERT INTO TABLEnAME(Name,Suraname,Email)
             VALUES (@name,@surname,@email)`
        );

        res.redirect("/success-message")

    }catch(err){
        console.log("Error: " + err);
    }
    
 }