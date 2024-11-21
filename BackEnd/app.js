const express=require ("express");
const app= express();
require("dotenv").config();
require("./connection/conn.js");
const User=require("./routes/user.js")
const Books =require("./routes/book.js");

app.use(express.json());
//routs 
app.use("/api/v1",User);
app.use("/api/v1",Books);
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