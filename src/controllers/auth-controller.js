const {
  loginUser,
  registerUser,
  userForgotPassword,
  resetUserPassword,
} = require("../use-cases/auth-use-cases");

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
      const { username, password, email } = req.body;
      const user = await registerUser(methods, username, password, email);
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      next(err);
    }
  };

  const forgotPassword = async (req, res, next) => {
    try {
      const { email } = req.body;
      await userForgotPassword(methods, email);
      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      next(err);
    }
  };
  const resetPassword = async (req, res, next) => {
    try {
      const { resetToken } = req.params;
      const { password } = req.body;
      await resetUserPassword(methods, resetToken, password);
      res.status(200).json({
        succes: true,
        data: { msg: "Password reset" },
      });
    } catch (err) {
      next(err);
    }
  };

  return { login, register, forgotPassword, resetPassword };
};
