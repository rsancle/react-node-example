import UserAlreadyExists from "../Domain/Errors/UserAlreadyExists";
import { Password } from "../Domain/Password";
import { UserRepository } from "../Domain/Persistence/UserRepository";
import User from "../Domain/User";

export default class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async run(id: string, email: string, password: string) {
        let user = await this.userRepository.findByEmail(email);
        if (user) throw new UserAlreadyExists;
        user = new User(
            id,
            email,
            await Password.toHash(password)
        );

        return this.userRepository.save(user);
    }
}