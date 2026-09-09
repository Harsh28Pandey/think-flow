import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

const port = process.env.PORT
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Auth server"
    })
})

app.listen(port, () => {
    console.log(`Auth server is running on port ${port}`);
    connectDB()
})