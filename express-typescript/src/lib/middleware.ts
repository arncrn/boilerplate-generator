import { NextFunction, Request, Response } from 'express';
import config from './config';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  if (config.NODE_ENV !== 'test') {
    console.log('Method:', req.method);
    console.log('Path:  ', req.path);
    console.log('Body:  ', req.body);
    console.log('---');
  }
  next();
};

export const unknownEndpoint = (req: Request, res: Response) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.message);

  next(error);
};
