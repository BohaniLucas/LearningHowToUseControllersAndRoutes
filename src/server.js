import router from "./routes/userRoutes.js";
import express from "express"


const app = express();

const Port = 3000;

// /send/details

app.post("/send", router)

app.listen(Port, ()=>{
    console.log(`This website is running on http://localhost:${Port}`);
});

