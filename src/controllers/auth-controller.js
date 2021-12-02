const {
  loginUser,
  registerUser,
  googleVerify,
  findOneAndUpdate
} = require("./auth-use-cases");
const jwt = require("jsonwebtoken");
const { JWTSECRET } = process.env;

module.exports = (methods) => {
  const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await loginUser(methods, username, password);
      console.log(user, "this the user in login");
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  };

  const register = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await registerUser(methods, username, password);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  };

  const googleAuth = async (req, res) => {
    try {
      // Check if the google token is correct
      const googleToken = await googleVerify(req.body.token);
      const user = await findOneAndUpdate(methods, googleToken);
      const payload = {
        user: user.id
      };
      const token = jwt.sign(payload, JWTSECRET);

      res.status(200).json({ user, token });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  };

  return { login, register, googleAuth };
};
