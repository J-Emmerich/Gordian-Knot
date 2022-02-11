const jwt = require("jsonwebtoken");
const methods = require("../data/methods/user-methods");

const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // <- Get everything after the blank space
    const decodedToken = jwt.verify(token, process.env.JWTSECRET, {
      complete: true
    });
    const username = decodedToken.payload.user;
    const user = await methods.findOne({ username });
    
    if (user && user.username === username) {
      req.token = token
      req.user = user;
      req.currentProject = user.currentProject;
      next();
    } else {
      throw "No user";
    }
  } catch (error) {
    res.status(401).json({
      error: new Error(error)
    });
  }
};

module.exports = { verify };
