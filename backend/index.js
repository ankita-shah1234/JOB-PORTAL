//const express = require('express')   // old way

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});


const app = express();

const server = app.listen(3000);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 3000 is already in use');
    process.exit(1);
  }
});



// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corOptions = {
    origin:'http//localhost:5173',
    credentials:true
}

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
  connectDB();  
 console.log(`server running at port ${PORT}`);
})