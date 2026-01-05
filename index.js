import express from 'express';
import os from 'os-utils';
import dotenv from 'dotenv';
import { connectDB } from './src/db/config.js';
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
import handleRouter from "./src/api/message/routes.js"
connectDB()
setInterval(() => {
    os.cpuUsage((usage) => {
        const percentage = usage * 100;
        console.log(`Live CPU Usage: ${percentage.toFixed(2)}%`);

        if (percentage > 70) {
            console.log("ALERT: Usage above 70%. Restarting server now...");
            process.exit(1);
        }
    });
}, 2000);

// --- TASK 2 (PART 2): THE POST API ---
app.post('/api', handleRouter);


app.listen(PORT, () => console.log('Server is live on port'));