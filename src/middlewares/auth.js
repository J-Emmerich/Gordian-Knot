const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // <- Get everything after the blank space
    const decodedToken = jwt.verify(token, process.env.JWTSECRET);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: new Error(error)
    });
  }
};

module.exports = { verify };
