import { Request, Response } from 'express';
import { OK } from 'http-status';
import FindUserByEmail from '../../../Context/Users/Application/FindUserByEmail';
import NotFound from '../../Errors/NotFound';
import userRepositoryProvider from '../../Providers/UserRepositoryProvider';

export default class FindUserByEmailController {
    private action;
    constructor() {
        this.action = new FindUserByEmail(userRepositoryProvider);
    }
    async run({ query }: Request, res: Response) {
        const email: any = query.email;
        const user = await this.action.run(email);

        if (!user) { throw new NotFound(); }
        return res.status(OK).send(user);
    }
}