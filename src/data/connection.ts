// Why is this here?
import { logger } from "@utilities";

process.stdin.resume();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3dgxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const options = {
  // strictPopulate: false
};

// start the connection when the file is loaded

try {
  mongoose.connect(uri, options);
} catch (error) {
  logger.error(error);
}

mongoose.connection.on("connected", () => {
  logger.info("Connected to Mongoose");
});

mongoose.connection.on("disconnected", () => {
  logger.info("Disconnected from Mongoose");
});
mongoose.connection.on("disconnecting", () => {
  logger.info("Disconnecting from Mongoose");
});
mongoose.connection.on("error", (err: string) => {
  logger.error(err);
});

// Disconnect from mongoose when server is killed

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});

module.exports = mongoose;
