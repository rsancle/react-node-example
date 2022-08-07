import { Collection, MongoClient } from "mongodb";

export default abstract class MongoRepository {
    constructor(private client: Promise<MongoClient>) { }

    protected abstract moduleName(): string;

    protected getClient(): Promise<MongoClient> {
        return this.client;
    }

    protected async collection(): Promise<Collection> {
        return (await this.client).db().collection(this.moduleName());
    }

    protected async persist(id: string, object: Object): Promise<void> {
        const collection = await this.collection();

        const document = { ...object, _id: id, id: undefined };

        await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
    }
}