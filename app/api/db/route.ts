import { mongoClient } from "@/lib/mongodb"

export async function POST(req: Request) {

    const body = await req.json()

    const deposits = {
        ...body,
    }

    try {
        await mongoClient.connect()

        const db = mongoClient.db("Funds")
        const collection = db.collection('deposits')

        await collection.insertOne(deposits)

        return Response.json({message: `successfully recorded deposit - ${body.depositId}`})
    } catch (error) {
        return Response.json({error})
    } finally {
        await mongoClient.close()
    }
}