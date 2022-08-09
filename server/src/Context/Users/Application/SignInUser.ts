import { Password } from "../Domain/Password";
import { UserRepository } from "../Domain/Persistence/UserRepository";

export default class SignInUser {
    constructor(private userRepository: UserRepository) { }

    async run(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);
        const passwordsMatch = user && await Password.compare(user?.password, password);
        if (!passwordsMatch) {
            return null;
        }
        let json = user.toJson();
        delete json.password;
        return json;
    }
}