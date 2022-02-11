require("dotenv").config({path: '../.env'}); // adjust path on development
const express = require("express");
const path = require("path");
const verifyToken = require("./middlewares/auth");
const PORT = process.env.PORT || 8000
const {dashboardRouter, invoiceRouter, authRouter, customerRouter, projectRouter, userRouter} = require("./routes");
const {toDoMethods, invoiceMethods, userMethods, customerMethods} = require("./data/methods")


const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use("/api/auth", authRouter(userMethods));
app.use("/api/pdf", verifyToken.verify, invoiceRouter(invoiceMethods));
app.use("/api/dashboard", verifyToken.verify, dashboardRouter(toDoMethods));
app.use("/api/customer", verifyToken.verify, customerRouter(customerMethods));
app.use("/api/project", verifyToken.verify, projectRouter(userMethods));
app.use("/api/user", verifyToken.verify, userRouter(userMethods));


// Uncomment for production build

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is listening to the port ${PORT}`);

});
