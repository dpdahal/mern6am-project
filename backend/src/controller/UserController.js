class UserController {
  async index(req, res) {
    return res.json({ message: "Hello users" });
  }

  async create(req, res) {
    return res.json({ message: "Create user" });
  }

    async show(req, res) {
        return res.json({ message: "Show user" });
    }
    
}
export default UserController;

