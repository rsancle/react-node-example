import { Request, Response } from 'express';
import { CREATED } from 'http-status';
import CreateUser from '../../Context/Users/Application/CreateUser';
import { v4 as uuidv4 } from 'uuid';
import MongoUserRepository from '../../Context/Users/Infrastructure/Persistence/MongoUserRepository';
import { MongoClientFactory } from '../../Context/Shared/Infrastructure/Persistence/Mongo/MongoClientFactory';

export default class PostUserController {
    private action;
    constructor() {
        this.action = new CreateUser(
            new MongoUserRepository(
                MongoClientFactory.createClient('users', {
                    url: process.env.MONGO_HOST!
                })
            )
        );
    }
    async run({ body }: Request, res: Response) {
        const email: string = body.email;
        const password: string = body.password;
        const id: string = uuidv4();
        this.action.run(id, email, password);

        return res.sendStatus(CREATED);
    }
}