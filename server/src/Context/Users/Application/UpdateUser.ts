import { UserRepository } from "../Domain/Persistence/UserRepository";

export default class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async run(id: string, data: Object) {
        return this.userRepository.update(id, data);
    }
}