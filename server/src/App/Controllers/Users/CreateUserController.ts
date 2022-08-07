import { Request, Response } from 'express';
import { CREATED } from 'http-status';
import CreateUser from '../../../Context/Users/Application/CreateUser';
import { v4 as uuidv4 } from 'uuid';
import userRepositoryProvider from '../../Providers/UserRepositoryProvider';

export default class CreateUserController {
    private action;
    constructor() {
        this.action = new CreateUser(userRepositoryProvider);
    }
    async run({ body }: Request, res: Response) {
        const email: string = body.email;
        const password: string = body.password;
        const id: string = uuidv4();

        await this.action.run(id, email, password);
        return res.status(CREATED).send();
    }
}