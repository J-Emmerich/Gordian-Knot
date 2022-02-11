const {
  loginUser,
  registerUser,
} = require("../use-cases/auth-use-cases");
const jwt = require("jsonwebtoken");
const { JWTSECRET } = process.env;

module.exports = (methods) => {
  const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await loginUser(methods, username, password);
      res.status(200).json({success: true, data: user});
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  };

  const register = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await registerUser(methods, username, password);
      res.status(200).json({success: true, data: user});
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  };





  return { login, register };
};
