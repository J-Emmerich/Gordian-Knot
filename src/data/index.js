const connection = require("./connection");
const ToDo = require("./models/to-do");
const Invoice = require("./models/invoice");

// Delete everything from the model.
const { cleanAndLog } = require("../helpers/clean-and-log");
// cleanAndLog(*model);
module.exports = { connection, ToDo, Invoice };
