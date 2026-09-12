import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { getCurrentUser } from './controllers/user.controller.js';
import protect from './middleware/auth.middleware.js';
import { proxyWithHeader } from './utils/proxyWithHEader.js';

const port = process.env.PORT
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(cookieParser())

app.use("/api/auth", proxy(process.env.AUTH_SERVICE))
app.use("/api/chat", protect, proxyWithHeader(process.env.CHAT_SERVICE))
app.use("/api/agent", protect, proxy(process.env.AGENT_SERVICE))
app.use("/api/me", protect, getCurrentUser)

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Gateway server"
    })
})

app.listen(port, () => {
    console.log(`Gateway server is running on port ${port}`);
})