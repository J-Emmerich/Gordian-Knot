const express = require("express");
const dashboardRouter = require("./routes/dashboard");

const methods = require("./data/methods");
const cors = require("cors");
const app = express();

const { cleanAndLog } = require("./helpers/clean-and-log");

//create a server object:
app.use(cors()); // <--- need to enable it to work with the front
app.use(express.json());

app.use("/dashboard", dashboardRouter(methods));

app.listen(8080, () => {
  console.log("Server is listening to the port 8080");
});
