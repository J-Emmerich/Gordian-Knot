import { NextFunction, Response } from 'express';
import { Error } from 'mongoose';
import { IRequest } from '../commons/types';
import {ErrorResponse} from '../utilities/errorResponse'

const sendHttpResponse = (err : ErrorResponse, req: IRequest, res: Response) => {
  console.log("http response ^^******************++", err);
  if (err.statusCode === 500) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  } else if (err.route === "Auth") {
    res.status(401).json({
      success: false,
      error: "Invalid credentials",
    });
  } else if (err.route === "Setting") {
    res.status(err.statusCode || 500).json({
      success: false,
      error: err.message || "Server Error",
    });
  } else
    res.status(err.statusCode || 500).json({
      success: false,
      error: err.message || "Server Error",
    });
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err : Error, req: IRequest, res: Response, next: NextFunction) => {
  let error = { ...err };
console.log("at error handler");
  error.message = `${err.message}`;
  let errorResponse;
  if (err.code === 11000) {
    const message = "Duplicate Field Error";
    const errorResponse : ErrorResponse = new ErrorResponse(message, 400, error.route);
    sendHttpResponse(errorResponse, req, res);
  } else if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    errorResponse = new ErrorResponse(message, 400, error.route);
    sendHttpResponse(errorResponse, req, res);
  } else {
    sendHttpResponse(error as ErrorResponse, req, res);
  }
};

export const logError = (err, req, res, next) => {
  console.log("At log Error", err, "At logError.");
  next(err);
};

