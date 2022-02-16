const jwt = require("jsonwebtoken");
const methods = require("../data/methods/setting-methods");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWTSECRET, {
      complete: true,
    });
    const username = decodedToken.payload.user;
    const user = await methods.findOne({ username });

    if (user && user.username === username) {
      req.token = token;
      req.user = user;
      req.currentProject = user.currentProject;
      next();
    } else {
      console.log("no user");
      throw new Error("No user");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { verifyToken };
