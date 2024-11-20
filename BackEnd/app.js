const express=require ("express");
const app= express();
require("dotenv").config();
require("./connection/conn.js");
const user=require("./routes/user.js")

app.use(express.json())
//routs 
app.use("/api/v1",user);
//
// app.get("/", (req,res)=>{
//     res.send("hello from backend")
// });

//installing dotenv
// conn();
//creating port
app.listen (process.env.PORT,()=>{
    console.log (`Server is running on ${process.env.PORT} `);
})