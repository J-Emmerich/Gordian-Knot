import "dotenv/config";  
import "module-alias/register";
import * as express from "express";
import helmet from "helmet";
import { errorHandler, logError, authenticate } from "@middlewares";
import { createContext, loggerMiddleware, logger } from "@utilities";
import { join } from "path";
import {
  projectRouter,
  authenticationRouter,
  userRouter,
  invoiceRouter,
  customerRouter,
} from "./routes";
// import { debugRouter } from "./routes/debug";
// Connects to MongoDB Atlas
import "./data/connection";

const app = express();
const port = 3000;

// A bit of security
app.use(helmet());
app.use(loggerMiddleware);
// For react
app.use(express.static(join(__dirname, "../client/build")));

app.use(express.json());
app.all("*", createContext);

// app.use("/debug", debugRouter());

app.use("/user", authenticationRouter());
app.all("/api/*", authenticate);
app.use("/api/project", projectRouter());
app.use("/api/user", userRouter());
app.use("/api/invoice", invoiceRouter());
app.use("/api/customer", customerRouter());

// why is this here?
app.get("*", (_req, res) => {
  res.sendFile(join(__dirname, "../client/build/index.html"));
});

app.use(logError);
app.use(errorHandler);

app.listen(port, () => logger.info(`App is listening to port ${port}`));
