import 'dotenv/config';
import 'module-alias/register';
import express from 'express';
import helmet from 'helmet';
import { errorHandler, logError, authenticate } from '@middlewares';
import { createContext, loggerMiddleware, logger } from '@utilities';
import { join } from 'path';
import {
  projectRouter,
  authenticationRouter,
  userRouter,
  invoiceRouter,
  customerRouter,
} from './routes';
// import { debugRouter } from "./routes/debug";
// Connects to MongoDB Atlas
import './data/connection';

const app = express();
const { PORT } = process.env;

// A bit of security
app.use(helmet());
app.use(loggerMiddleware);
// Serves the compiled React static assets (JS, CSS, images) 
// directly from the client/build folder.
app.use(express.static(join(__dirname, '../client/build')));

app.use(express.json());
app.all('*', createContext);

// app.use("/debug", debugRouter());

app.use('/public/auth', authenticationRouter());
app.all('/api/*', authenticate);
app.use('/api/project', projectRouter());
app.use('/api/user', userRouter());
app.use('/api/invoice', invoiceRouter());
app.use('/api/customer', customerRouter());

// fallback for any non‑API GET request
// returning index.html so the React router can take over on the client side.

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '../client/build/index.html'));
});

app.use(logError);
app.use(errorHandler);

app.listen(PORT, () => logger.info(`App is listening to port ${PORT}`));
