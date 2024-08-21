import User from "../models/User.js";

class UserController {
  async index(req, res) {
    try{
        const users = await User.find({});
        return res.status(200).json(users);
    }catch(e){
        console.log(e);
        return res.status(500).json({message:e.message});
    }
  }

  

  async create(req, res) {
    try{
      await User.create({...req.body});
      return res.status(201).json({message:"User created successfully"});

    }catch(e){
        console.log(e);
        return res.status(500).json({message:e.message});
    }
   
  }

    async show(req, res) {
        return res.json({ message: "Show user" });
    }
    
}
export default UserController;