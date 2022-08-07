import User from "../../Domain/User";
import { UserRepository } from "../../Domain/Persistence/UserRepository";
import MongoRepository from "../../../Shared/Infrastructure/Persistence/Mongo/MongoRepository";
import UserDocument from "./UserDocument";

export default class MongoUserRepository extends MongoRepository implements UserRepository {
    save(user: User): Promise<void> {
        return this.persist(user.id, user.toJson());
    }
    async findById(userId: string): Promise<User | null> {
        const collection = await this.collection();
        const document = await collection.findOne({ _id: userId }) as UserDocument;
        return document ? User.createFromJson({ ...document, id: userId }) : null;
    }

    protected moduleName(): string {
        return 'users';
    }
}