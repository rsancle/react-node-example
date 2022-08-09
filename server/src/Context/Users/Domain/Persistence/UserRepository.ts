import User from '../User';

export interface UserRepository {
    save(user: User): Promise<void>;
    update(id: string, user: Object): Promise<void>;
    findByEmail(userId: string): Promise<User | null>;
}