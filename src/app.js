require("dotenv").config(/* { path: "../.env" } */); // adjust path on development

const express = require("express");
const path = require("path");
const auth = require("./middlewares/auth");

const PORT = process.env.PORT || 8000;
const {
  invoiceRouter,
  authRouter,
  customerRouter,
  settingRouter,
} = require("./routes");
const {
  invoiceMethods,
  settingMethods,
  customerMethods,
} = require("./data/methods");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use("/api/auth", authRouter(settingMethods));
app.use("/api/invoice", auth.verifyToken, invoiceRouter(invoiceMethods));
app.use("/api/customer", auth.verifyToken, customerRouter(customerMethods));
app.use("/api/setting", auth.verifyToken, settingRouter(settingMethods));

// Uncomment for production build

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening to the port ${PORT}`);
});
