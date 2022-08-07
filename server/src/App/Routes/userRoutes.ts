import { Router, Request, Response } from 'express';
import FindUserByEmailController from '../Controllers/Users/FindUserByEmailController';
import CreateUserController from '../Controllers/Users/CreateUserController';
import SignInUserController from '../Controllers/Users/SignInUserController';

export const register = (router: Router) => {
    router.post('/users/sign-up', (req: Request, res: Response) => (new CreateUserController).run(req, res));
    router.post('/users/sign-in', (req: Request, res: Response) => (new SignInUserController).run(req, res));
    router.get('/users', (req: Request, res: Response) => (new FindUserByEmailController).run(req, res));
};