process.stdin.resume();
const mongoose = require("mongoose");
const { logError } = require("../middlewares/error-handler");

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB;

const uri = `mongodb://${user}:${password}@localhost:27017/${database}?authSource=admin`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
try {
  mongoose.connect(uri, options);
} catch (error) {
  logError(error);
}

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongoose");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from Mongoose");
});
mongoose.connection.on("disconnecting", () => {
  console.log("Disconnecting from Mongoose");
});
mongoose.connection.on("error", (err) => {
  logError(err);
});

// Disconnect from mongoose when server is killed

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});

module.exports = mongoose;
