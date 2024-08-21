import express from 'express';
import dotenv from 'dotenv';
import database from './config/database.js';
import webRoute from './routes/web.js';
const app = express();
app.use(express.json());
dotenv.config();
database.connect();
app.use(webRoute);

let mode = process.env.MODE;
if (mode === "development") {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port http://127.0.0.1:${port}`);
    });
}else{
    console.log("Server is running on production mode");
}