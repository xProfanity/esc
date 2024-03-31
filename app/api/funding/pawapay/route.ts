import axios from "axios"
import { v4 as uuidv4 } from "uuid"

const BASEURL = process.env.NODE_ENV === "development" ? "https://api.sandbox.pawapay.cloud" : "https://api.pawapay.cloud"

export function GET() {

    return Response.json({message: `Connected`})
}

export async function POST(req: Request) {
    const body = await req.json()

    if(body.amount === '') return Response.json({error: 'amount required'})

    const depositRequest = {
        "depositId": uuidv4(),
        "amount": Number(body.amount),
        "returnUrl": "https://merchant.com/paymentProcessed",
    }

    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MUX_SECRET_KEY}`,
        },
    }

    try {
        console.log('trying');
        
        const res = await axios.post(`${BASEURL}/v1/widget/sessions`, depositRequest, options)

        console.log('tried');
        console.log(`${BASEURL}/deposits`);
        
        console.log('success');
        
        return Response.json({res})
    } catch (error) {
        console.log('saht');
        
        return Response.json(JSON.stringify(error))
    }
}