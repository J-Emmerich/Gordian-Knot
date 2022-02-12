const connection = require("./connection");
const Invoice = require("./models/invoice");
const User = require("./models/user");
const Customer = require("./models/customer");

// Delete everything from the model.
// const { cleanAndLog } = require("../helpers/clean-and-log");
// cleanAndLog(*model);
module.exports = { connection, Invoice, User, Customer };
