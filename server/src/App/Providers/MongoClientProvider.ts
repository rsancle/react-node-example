import { MongoClientFactory } from "../../Context/Shared/Infrastructure/Persistence/Mongo/MongoClientFactory"

const mongoClientProvider = MongoClientFactory.createClient('users', {
    url: process.env.MONGO_HOST!
});

export default mongoClientProvider