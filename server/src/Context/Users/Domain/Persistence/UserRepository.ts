import User from '../User';

export interface UserRepository {
    save(user: User): Promise<void>;
    findByEmail(userId: string): Promise<User | null>;
}