import { Router, Request, Response } from 'express';
import PostUserController from '../Controllers/Users/PostUsersController';

export const register = (router: Router) => {
    router.post('/users/sign-up', (req: Request, res: Response) => (new PostUserController).run(req, res));
};