import type { WithId, Document } from 'mongodb'

export default interface UserDocument extends WithId<Document> {
    id: string;
    email: string;
    password: string;
}