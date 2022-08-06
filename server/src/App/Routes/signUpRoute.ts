import { Router, Request, Response } from 'express';
import httpStatus from 'http-status';

export const register = (router: Router) => {
    router.post('/sign-up', (req: Request, res: Response) => { res.sendStatus(httpStatus.CREATED) });
};