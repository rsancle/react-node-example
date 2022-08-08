import { Request, Response } from 'express';
import { OK } from 'http-status';

export default class GetCurrentUserController {
    async run(req: any, res: Response) {
        return res.status(OK).send(req.loggedUser || null);
    }
}