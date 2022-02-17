const { loginUser, registerUser } = require("../use-cases/auth-use-cases");

module.exports = (methods) => {
  const login = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await loginUser(methods, username, password);
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      next(err);
    }
  };

  const register = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await registerUser(methods, username, password);
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      next(err);
    }
  };

  const forgotPassword = async (req, res, next) => {
    try {

      res.status(200).json({succes: true, data: "This is forgot password token"})
    } catch (err) {
      next(err);
    }
  }
  const resetPassword = async (req, res, next) => {
    try {
      const token = req.params.resetToken;
res.status(200).json({succes: true, data: { msg: "This is reset password token", token}})
    } catch (err) {
      next(err);
    }
  }

  return { login, register, forgotPassword, resetPassword };
};
