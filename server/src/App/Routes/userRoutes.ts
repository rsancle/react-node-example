import { Router, Request, Response } from 'express';
import PostUserController from '../Controllers/PostUserController';

export const register = (router: Router) => {
    router.post('/sign-up', (req: Request, res: Response) => (new PostUserController).run(req, res));
};