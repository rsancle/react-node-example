import { UserRepository } from "../Domain/Persistence/UserRepository";
import User from "../Domain/User";

export default class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async run(id: string, email: string, password: string) {
        const user = new User(
            id,
            email,
            password
        );

        return this.userRepository.save(user);
    }
}