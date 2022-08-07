import { Router, Request, Response } from 'express';
import GetPaginatedCharactersController from '../Controllers/Characters/GetPaginatedCharactersController';
import { loggedUsersOnly } from '../Middlewares/loggedUsersOnly';


export const register = (router: Router) => {
    router.get('/characters', loggedUsersOnly, (req: Request, res: Response) => (new GetPaginatedCharactersController).run(req, res));
};