import User from '../User';

export interface UserRepository {
    save(user: User): Promise<void>;
    findById(userId: string): Promise<User | null>;
}