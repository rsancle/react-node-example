import { Request, Response } from 'express';
import { OK } from 'http-status';

export default class SignOutUserController {
    async run(req: Request, res: Response) {
        req.session = null;
        return res.status(OK).send();
    }
}