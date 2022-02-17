const ErrorResponse = require("../helpers/error-response");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = `${err.message}`;
  if (err.code === 11000) {
    const message = "Duplicate Field Error";
    error = new ErrorResponse(message, 400);
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

const logError = (err, req, res, next) => {
  console.log("At log Error", err, "At logError.");
  next(err);
};

module.exports = { errorHandler, logError };
