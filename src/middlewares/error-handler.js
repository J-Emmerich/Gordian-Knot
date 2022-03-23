const ErrorResponse = require("../helpers/error-response");

const sendHttpResponse = (err, req, res) => {
  console.log("http response ^^******************++", err);
  if (err === 500) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  } else if (err.route === "Auth") {
    res.status(401).json({
      success: false,
      error: "Invalid credentials",
    });
  } else if (err.route === "Setting") {
    res.status(err.statusCode || 500).json({
      success: false,
      error: err.message || "Server Error",
    });
  } else
    res.status(err.status || 500).json({
      success: false,
      error: err.message || "Server Error",
    });
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = `${err.message}`;
  if (err.code === 11000) {
    const message = "Duplicate Field Error";
    error = new ErrorResponse(message, 400, error.route);
    sendHttpResponse(error, req, res, next);
  } else if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorResponse(message, 400, error.route);
    sendHttpResponse(error, req, res, next);
  } else {
    sendHttpResponse(error, req, res, next);
  }
};

const logError = (err, req, res, next) => {
  console.log("At log Error", err, "At logError.");
  next(err);
};

module.exports = { errorHandler, logError };
