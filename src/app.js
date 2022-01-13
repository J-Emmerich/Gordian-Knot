require("dotenv").config({path: '../.env'});
const express = require("express");
const path = require("path");
const verifyToken = require("./middlewares/auth");

const dashboardRouter = require("./routes/dashboard");
const invoiceRouter = require("./routes/invoice");
const authRouter = require("./routes/auth");
const customerRouter = require("./routes/customer");
const bugRouter = require("./routes/bug-tracker");
const projectRouter = require("./routes/project");
const userRouter = require("./routes/user");

const toDoMethods = require("./data/to-do-methods");
const invoiceMethods = require("./data/invoice-methods");
const userMethods = require("./data/user-methods");
const customerMethods = require("./data/customer-methods");
const bugMethods = require("./data/bug-methods");

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use("/api/auth", authRouter(userMethods));
app.use("/api/pdf", verifyToken.verify, invoiceRouter(invoiceMethods));
app.use("/api/dashboard", verifyToken.verify, dashboardRouter(toDoMethods));
app.use("/api/customer", verifyToken.verify, customerRouter(customerMethods));
app.use("/api/bugtracker", verifyToken.verify, bugRouter(bugMethods));
app.use("/api/project", verifyToken.verify, projectRouter(userMethods));
app.use("/api/user", verifyToken.verify, userRouter(userMethods));


app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'../client/build/index.html'));
});


app.listen(3001, () => {
  console.log("Server is listening to the port 3001");

});
