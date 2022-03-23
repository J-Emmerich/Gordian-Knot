const connection = require("./connection");
const Invoice = require("./models/invoice");
const User = require("./models/user");
const Customer = require("./models/customer");
const Project = require("./models/project");

// Delete everything from the model.
// const { cleanAndLog } = require("../helpers/clean-and-log");
// cleanAndLog( Project/* Insert Model !!! it will delete everything !!! */);
module.exports = { connection, Invoice, User, Customer, Project };
