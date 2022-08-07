import { Request, Response, NextFunction } from 'express';
import Unauthorized from '../Errors/Unauthorized';

export const loggedUsersOnly = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.loggedUser) {
        throw new Unauthorized;
    }
    next();
};
