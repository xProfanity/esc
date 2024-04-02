import { MongoClient, ServerApiVersion } from 'mongodb';

export const mongoClient = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI as string, {
    serverApi: ServerApiVersion.v1,
})

