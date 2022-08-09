import UserAlreadyExists from "../Domain/Errors/UserAlreadyExists";
import UserNotFound from "../Domain/Errors/UserNotFound";
import { Password } from "../Domain/Password";
import { UserRepository } from "../Domain/Persistence/UserRepository";
import User from "../Domain/User";

export default class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async run(id: string, data: Object) {
        return this.userRepository.update(id, data);
    }
}