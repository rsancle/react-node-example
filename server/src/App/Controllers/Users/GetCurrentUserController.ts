import { Request, Response } from 'express';
import { OK } from 'http-status';
import FindUserByEmail from '../../../Context/Users/Application/FindUserByEmail';
import userRepositoryProvider from '../../Providers/UserRepositoryProvider';

export default class GetCurrentUserController {
    private action;
    constructor() {
        this.action = new FindUserByEmail(userRepositoryProvider);
    }
    async run(req: any, res: Response) {
        let user;
        if (req.loggedUser) {
            user = await this.action.run(req.loggedUser.email);
        }

        return res.status(OK).send(user || null);
    }
}