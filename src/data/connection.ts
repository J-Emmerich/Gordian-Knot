// Why is this here?
process.stdin.resume();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose");

// This should be a central log system that is not implemented as yet
// const { logError } = require("../middlewares/error-handler");

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB;
const uri = `mongodb+srv://${user}:${password}@${database}.mbikmto.mongodb.net/?retryWrites=true&w=majority&authSource=admin`;

const options = {
  // strictPopulate: false
};

// start the connection when the file is loaded

try {
  mongoose.connect(uri, options);
} catch (error) {
  console.log(error);
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
mongoose.connection.on("error", (err: string) => {
  console.log(err);
});

// Disconnect from mongoose when server is killed

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});

module.exports = mongoose;
