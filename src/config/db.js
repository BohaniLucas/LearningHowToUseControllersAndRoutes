import sql from "mssql/msnodesqlv8.js";
import env from "dotenv";

//msnodesqlv8"

env.config();

const config = {
    connectionString:`Driver={ODBC Driver 18 for Sql Server};Server=${process.env.SERVER_Name};Database=${process.env.DB_NAME};Trusted_Connection=yes;Encrypt=no;TrustServerCertificate=yes`,
}

export async function connectDB(){
    try{
        console.log("Trying to connect to the database....")
        const pool = await sql.connect(config);

        console.log("Successfully Connected");

        return pool;
    }catch(err){
        console.log("Error: " , err);
    }
}

export {sql};

