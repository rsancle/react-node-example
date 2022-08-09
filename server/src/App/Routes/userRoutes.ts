import { Router, Request, Response } from 'express';
import FindUserByEmailController from '../Controllers/Users/FindUserByEmailController';
import CreateUserController from '../Controllers/Users/CreateUserController';
import SignInUserController from '../Controllers/Users/SignInUserController';
import GetCurrentUserController from '../Controllers/Users/GetCurrentUserController';
import { loggedUser } from '../Middlewares/loggedUser';
import PatchUserController from '../Controllers/Users/PatchUserController';
import SignOutUserController from '../Controllers/Users/SignOutUserController';

export const register = (router: Router) => {
    router.post('/users/sign-up', (req: Request, res: Response) => (new CreateUserController).run(req, res));
    router.post('/users/sign-in', (req: Request, res: Response) => (new SignInUserController).run(req, res));
    router.get('/users/sign-out', loggedUser, (req: Request, res: Response) => (new SignOutUserController).run(req, res));
    router.get('/users', loggedUser, (req: Request, res: Response) => (new FindUserByEmailController).run(req, res));
    router.get('/users/current', loggedUser, (req: Request, res: Response) => (new GetCurrentUserController).run(req, res));
    router.patch('/users/:id', loggedUser, (req: Request, res: Response) => (new PatchUserController).run(req, res));
};