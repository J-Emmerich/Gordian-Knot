const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../helpers/error-response");
const {logError} = require("../middlewares/error-handler");

const { JWTSECRET } = process.env;

const registerUser = async (methods, username, password) => {
 
    if (password.length < 3) {
      throw new ErrorResponse("Invalid Credentials", 400);
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await methods.create({ username, passwordHash });
    const payload = {
      user: user.username,
    };
    const token = jwt.sign(payload, JWTSECRET);

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
console.log(user);
    const token = jwt.sign(payload, JWTSECRET);
    return { 
      user: user.username, token };
 
};

module.exports = {
  registerUser,
  loginUser,
};
