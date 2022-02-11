const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWTSECRET } = process.env;
const { OAuth2Client } = require("google-auth-library");
const googleClient = new OAuth2Client(process.env.GOOGLE_ID);
const registerUser = async (methods, username, password) => {
  try {
    if (password.length < 3) {
      throw new Error("Please, provide a better password");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await methods.create({ username, passwordHash });

    const payload = {
      user: user.username,
      projects: user.projects
    };
    const token = jwt.sign(payload, JWTSECRET);

    return { user, token };
  } catch (err) {
    throw err;
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
          projects: user.projects
        };
        const returnedUser = {
          _id: user._id,
          username: user.username,
          projects: user.projects,
          currentProject: user.currentProject
        }; // So the password is not returned
        const token = jwt.sign(payload, JWTSECRET);
        return { user: returnedUser, token };
      } else throw new Error("Password don't match");
    } else throw new Error("No such user, my friend");
  } catch (err) {
    throw err;
  }
};

const googleVerify = async (token) => {
  try {
    const verify = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_ID
    });
    const payload = verify.getPayload();
    return payload;
  } catch (err) {
    throw err;
  }
};

const findUserAndUpdate = async (methods, googleToken) => {
  try {
    const user = await methods.findOneAndUpdate(googleToken);
    return user;
  } catch (err) {
    return err;
  }
};

module.exports = {
  registerUser,
  loginUser,
  googleVerify,
  findUserAndUpdate
};
