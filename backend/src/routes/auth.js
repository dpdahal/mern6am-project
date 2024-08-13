import express from 'express';

const authRoute = express.Router();

authRoute.get('/',function(req,res){
    return res.json({message: "login route"});
});

authRoute.get('/register',function(req,res){
    return res.json({message: "register route"});
});

export default authRoute;