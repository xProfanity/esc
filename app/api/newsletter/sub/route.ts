import { mongoClient } from "@/lib/mongodb"

export async function POST(req: Request) {

    const {email} = await req.json()


    try {
        await mongoClient.connect()

        const db = mongoClient.db('ESC_Newsletter')
        const collection = db.collection('subscribers')

        await collection.insertOne({email})

        return Response.json({subscribed: true, error: null})
    } catch (error) {
        return Response.json({subscribed: false, error})
    } finally {
        await mongoClient.close()
    }
}