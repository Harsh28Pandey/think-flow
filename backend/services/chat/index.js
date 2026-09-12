import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/chat.routes.js';
dotenv.config();

const port = process.env.PORT
const app = express();
app.use(express.json());

app.use("/", router)

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Chat server"
    })
})

app.listen(port, () => {
    console.log(`Chat server is running on port ${port}`);
    connectDB()
})