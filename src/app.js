require("dotenv").config();
const express = require("express");

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

app.use(express.static(path.join(__dirname, 'client/build'))); 
app.use(express.json());
app.use("/api/auth", authRouter(userMethods));
app.use(verifyToken.verify);
app.use("/api/pdf", invoiceRouter(invoiceMethods));
app.use("/api/dashboard", dashboardRouter(toDoMethods));
app.use("/api/customer", customerRouter(customerMethods));
app.use("/api/bugtracker", bugRouter(bugMethods));
app.use("/api/project", projectRouter(userMethods));
app.use("/api/user", userRouter(userMethods));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'../client/build/index.html'));
});


app.listen(3000, () => {
  console.log("Server is listening to the port 3000");
});
