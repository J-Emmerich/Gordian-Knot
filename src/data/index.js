const connection = require("./connection");
const ToDo = require("./models/to-do");
const Invoice = require("./models/invoice");
const User = require("./models/user");
const Customer = require("./models/customer");
const Bug = require("./models/bug");


// Delete everything from the model.
const { cleanAndLog } = require("../helpers/clean-and-log");
// cleanAndLog(*model);
module.exports = { connection, ToDo, Invoice, User, Customer, Bug };
