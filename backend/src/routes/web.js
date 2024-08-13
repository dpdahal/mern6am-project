import express from 'express';
import userRoute from './user.js';
import authRoute from './auth.js';
const webRoute = express.Router();

webRoute.get('/', (req, res) => {
    res.json({ message: "Application is ready" });
});

webRoute.use('/auth', authRoute);
webRoute.use('/users', userRoute);


export default webRoute;