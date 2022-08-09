import { Request, Response } from 'express';
import { NO_CONTENT } from 'http-status';
import UpdateUser from '../../../Context/Users/Application/UpdateUser';
import userRepositoryProvider from '../../Providers/UserRepositoryProvider';

export default class CreateUserController {
    private action;
    constructor() {
        this.action = new UpdateUser(userRepositoryProvider);
    }
    async run(req: any, res: Response) {
        const { body } = req;
        const favoriteCharacters: string = body.favoriteCharacters;
        const id: string = req.loggedUser?.id || "";
        const user = { favoriteCharacters };
        await this.action.run(id, user);
        return res.status(NO_CONTENT).send();
    }
}