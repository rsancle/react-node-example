import { Request, Response } from 'express';
import { OK } from 'http-status';
import jwt from 'jsonwebtoken';
import userRepositoryProvider from '../../Providers/UserRepositoryProvider';
import SignInUser from '../../../Context/Users/Application/SignInUser';

export default class SignInUserController {
    private action;
    constructor() {
        this.action = new SignInUser(userRepositoryProvider);
    }
    async run(req: Request, res: Response) {
        const { email, password } = req.body;

        const existingUser = await this.action.run(email, password);
        if (!existingUser) { throw new Error("Invalid credentials") }
        // Generate JWT
        const userJwt = jwt.sign(existingUser, process.env.JWT_KEY!);
        // Store it on session object 
        req.session = { jwt: userJwt };

        return res.status(OK).send();
    }
}