const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWTSECRET } = process.env;

const registerUser = async (methods, username, password) => {
  try {
    if (password.length < 3) {
      throw new Error("Please, provide a better password");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await methods.create({ username, passwordHash });
    const payload = {
      user: user.username,
      projects: user.projects,
    };
    const token = jwt.sign(payload, JWTSECRET);

    return { user, token };
  } catch (err) {
    return err;
  }
};

const loginUser = async (methods, username, password) => {
  try {
    const user = await methods.findOne({ username });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.passwordHash
      );
      if (isPasswordCorrect) {
        const payload = {
          user: user.username,
          projects: user.projects,
        };
        const returnedUser = {
          _id: user._id,
          username: user.username,
          projects: user.projects,
          currentProject: user.currentProject,
        }; // So the password is not returned
        const token = jwt.sign(payload, JWTSECRET);
        return { user: returnedUser, token };
      }
      throw new Error("Password don't match");
    } else throw new Error("No such user, my friend");
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerUser,
  loginUser,
};
