import router from "./routes/userRoutes.js";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",router);

app.post("/send/details", router)

app.get("/success-message",router);

const Port = 3000;
app.listen(Port, ()=>{
    console.log(`This website is running on http://localhost:${Port}`);
});

