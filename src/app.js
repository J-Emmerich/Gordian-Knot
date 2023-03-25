require("dotenv").config(/* { path: "../.env" } */); // adjust path on development

const express = require("express");
const path = require("path");
const auth = require("./middlewares/auth");

const {
  invoiceRouter,
  authRouter,
  customerRouter,
  settingRouter,
} = require("./routes");
const {
  invoiceMethods,
  userMethods,
  customerMethods,
} = require("./data/methods");
const { errorHandler, logError } = require("./middlewares/error-handler");

const PORT = process.env.PORT || 8000;
const app = express();

// Used in react? 
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use("/api/auth", authRouter(userMethods));
app.use("/api/invoice", auth.verifyToken, invoiceRouter(invoiceMethods));
app.use("/api/customer", auth.verifyToken, customerRouter(customerMethods));
app.use("/api/setting", auth.verifyToken, settingRouter(userMethods));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(logError);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening to the port ${PORT}`);
});
