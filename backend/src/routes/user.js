import express from 'express';
import UserController from "../controller/UserController.js";

const userRoute = express.Router();
const uc = new UserController();

userRoute.get('/', uc.index);
userRoute.post('/', uc.create);

export default userRoute;