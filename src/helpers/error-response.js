class ErrorResponse extends Error {
  constructor(message, statusCode, route = "not defined") {
    super(message);
    this.statusCode = statusCode;
    this.route = route;
  }
}

module.exports = ErrorResponse;
