import {Request, Response, NextFunction} from 'express';
import {Schema} from 'joi';
import {BadRequestError} from '../util';
type ValidationPaths = 'body' | 'headers' | 'params' | 'query' | 'cookies';
export const validator = (schema: Schema, path: ValidationPaths) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const {error} = schema.validate(req[path]);
    if (error) {
      next(new BadRequestError(error.message));
      return;
    }
    next();
  };
};
