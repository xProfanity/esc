import { mongoClient } from "@/lib/mongodb"

export async function GET() {
    try {
        await mongoClient.connect()

        const subscribers = await mongoClient.db('ESC_Newsletter').collection('subscribers').find({}).toArray()

        

        return Response.json({message: 'emails sent'})
    } catch (error) {
        return Response.json({message: 'failure', error})
    } finally {
        await mongoClient.close()
    }
}