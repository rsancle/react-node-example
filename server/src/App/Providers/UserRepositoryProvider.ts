import MongoUserRepository from "../../Context/Users/Infrastructure/Persistence/MongoUserRepository";
import mongoClientProvider from "./MongoClientProvider";

const userRepositoryProvider = new MongoUserRepository(mongoClientProvider);
export default userRepositoryProvider