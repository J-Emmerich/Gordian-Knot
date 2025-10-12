import { logger } from "@utilities";
process.stdin.resume();

import mongoose from 'mongoose';

const { DB_USER, DB_PASSWORD} = process.env;
const user = encodeURIComponent(DB_USER);
const pass = encodeURIComponent(DB_PASSWORD);
// const DB = encodeURIComponent(DB_ENV); // required in some cases

const uri = `mongodb+srv://${user}:${pass}@cluster0.3dgxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
};

// start the connection when the file is loaded
async function initMongoose(){
  try {
    mongoose.connect(uri, options);
  } catch (error) {
    logger.error(error);
  process.exit(1);
  }
}

initMongoose();

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

const gracefulShutdown = async (signal: string) => {
  logger.info(`Received ${signal}. Closing Mongoose connection...`);
  await mongoose.disconnect();
  process.exit(0);
};

process.on('SIGINT',  () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGUSR2', () => gracefulShutdown('SIGUSR2'));
process.on('SIGQUIT', () => gracefulShutdown('SIGQUIT'));

export type Mongoose = typeof mongoose;
export default mongoose;
