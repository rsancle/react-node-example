import { Request, Response } from 'express';
import { CREATED } from 'http-status';
import UpdateUser from '../../../Context/Users/Application/UpdateUser';
import userRepositoryProvider from '../../Providers/UserRepositoryProvider';

export default class CreateUserController {
    private action;
    constructor() {
        this.action = new UpdateUser(userRepositoryProvider);
    }
    async run({ params, body }: Request, res: Response) {
        const favoriteCharacters: string = body.favoriteCharacters;
        const id: string = params.id;
        const user = { favoriteCharacters };

        await this.action.run(id, user);
        return res.status(CREATED).send();
    }
}