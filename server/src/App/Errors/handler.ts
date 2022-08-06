import { Request, Response, NextFunction } from 'express';
import ApplicationError from './ApplicationError';
import httpStatus from 'http-status';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ApplicationError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    console.error(err);
    res.status(httpStatus.BAD_REQUEST).send({
        errors: [{ message: err.message }, { message: err.stack }]
    });
};
