const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../helpers/error-response");
const { logError } = require("../middlewares/error-handler");
const sendEmail = require("../helpers/send-email");

const { JWT_SECRET, JWT_EXPIRE, BASE_FRONTEND_URL } = process.env;

const registerUser = async (methods, username, password, email) => {
  if (password.length < 3) {
    throw new ErrorResponse("Invalid Credentials", 400);
  }
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  const user = await methods.create({ username, passwordHash, email });
  const payload = {
    user: user.username,
  };
  const token = jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRE});
  return { user: user.username, token };
};

const loginUser = async (methods, username, password) => {
  const user = await methods.findOneWithPassword({ username });
  if (!user) throw new ErrorResponse("Invalid credentials", 400);
  const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordCorrect) throw new ErrorResponse("Invalid Credentials", 400);
  const payload = {
    user: user.username,
  };

  const token = jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRE});
  return {
    user: user.username,
    token,
  };
};

const resetUserPassword = async (methods) => {
  return
}

const userForgotPassword = async (methods, email) => {
  const user = await methods.findOneWithEmail({email});
  const resetToken = await methods.setResetToken(user);
  // console.log("User: ",user, "at userForgotPassword");
  // console.log("User Email: ",user.email, "at userForgotPassword");
  await sendResetTokenEmail(user.email, resetToken);
}

const sendResetTokenEmail = async (email, token) => {

    const resetUrl = `${BASE_FRONTEND_URL}/passwordreset/${token}`;
    const message = `
    <h1>You requested to reset your password</h1>
    <p>Please make a PUT request to the following link: </p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`;

await sendEmail({
   to: email,
   subject: "Reset Password",
   text: message
});
}

module.exports = {
  registerUser,
  loginUser,
  userForgotPassword
};
