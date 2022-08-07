import { Request, Response, NextFunction } from 'express';
import ApplicationError from './ApplicationError';
import httpStatus from 'http-status';
import UserAlreadyExists from '../../Context/Users/Domain/Errors/UserAlreadyExists';

export const errorHandler = async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ApplicationError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    if (err instanceof UserAlreadyExists) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: err.message });
    }


    console.error(err);
    res.status(httpStatus.BAD_REQUEST).send({
        errors: [{ message: err.message }, { message: err.stack }]
    });
};
