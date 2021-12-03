require("dotenv").config();
const express = require("express");

const verifyToken = require("./middlewares/auth");

const dashboardRouter = require("./routes/dashboard");
const invoiceRouter = require("./routes/invoice");
const authRouter = require("./routes/auth");
const customerRouter = require("./routes/customer");
const bugRouter = require("./routes/bug-tracker");
const userRouter = require("./routes/user");

const toDoMethods = require("./data/to-do-methods");
const invoiceMethods = require("./data/invoice-methods");
const userMethods = require("./data/user-methods");
const customerMethods = require("./data/customer-methods");
const bugMethods = require("./data/bug-methods");

const cors = require("cors");
const app = express();

// Delete everything from DB
const { cleanAndLog } = require("./helpers/clean-and-log");

//create a server object:
app.use(cors()); // <--- need to enable it to work with the front
app.use(express.json());
app.use("/auth", authRouter(userMethods));
app.use(verifyToken.verify);
app.use("/dashboard", dashboardRouter(toDoMethods));
app.use("/pdf", invoiceRouter(invoiceMethods));
app.use("/customer", customerRouter(customerMethods));
app.use("/bugtracker", bugRouter(bugMethods));
app.use("/project", userRouter(userMethods));

app.listen(8080, () => {
  console.log("Server is lsistening to the port 8080");
});
