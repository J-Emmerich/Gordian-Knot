import * as pino from 'pino';
import { normalize } from 'path';
import { context } from './asyncContext';
import { IRequest } from '@commons/types';
import { NextFunction, RequestHandler, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const { PINO_LOG_LEVEL } = process.env;

const logPath = normalize(`${__dirname}/../../../logs.json`);

// For multiple transports the level must be specified in each target.
const transport = pino.transport({
  targets: [
    {
      target: 'pino/file',
      options: { destination: logPath },
      level: PINO_LOG_LEVEL,
    },
    {
      target: 'pino-pretty',
      level: PINO_LOG_LEVEL,
    },
  ],
});

const loggerBase = pino(
  {
    level: 'trace',
  },
  transport,
);

// Proxify logger instance to use child logger from context if it exists
export const logger = new Proxy(loggerBase, {
  get(target, property, receiver) {
    target = context.getStore()?.get('logger') || target;
    return Reflect.get(target, property, receiver);
  },
});

// Generate a unique ID for each incoming request and store a child logger in context
// to always log the request ID
export const loggerMiddleware: RequestHandler = (
  _req: IRequest,
  _res: Response,
  next: NextFunction,
) => {
  const child = logger.child({ requestId: uuidv4() });
  const store = new Map();
  store.set('logger', child);

  return context.run(store, next);
};
