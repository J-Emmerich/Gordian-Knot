const Sequelize = require("sequelize");
const path = require("path");

const dbPath = path.join("../../database.sqlite");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath
});

async function auth() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
auth();
