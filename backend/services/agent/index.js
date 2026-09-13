import express from 'express';
import 'dotenv/config';
import connectDB from './config/db.js';
import router from './routes/agent.route.js';

const port = process.env.PORT
const app = express();
app.use(express.json());

app.use("/", router)

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Agent server"
    })
})

app.listen(port, () => {
    console.log(`Agent server is running on port ${port}`);
    connectDB()
})