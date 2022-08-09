import { UserRepository } from "../Domain/Persistence/UserRepository";

export default class FindUserByEmail {
    constructor(private userRepository: UserRepository) { }

    async run(email: string) {
        return (await this.userRepository.findByEmail(email))?.toJson();
    }
}