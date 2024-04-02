import { v4 as uuidv4 } from "uuid"

import { BASEURL } from "@/constants"

export function GET() {

    return Response.json({message: `Connected`})
}

export async function POST(req: Request) {
    const body = await req.json()

    if(body.amount === '') return Response.json({error: 'amount required'})

    const depositRequest = {
        "depositId": uuidv4(),
        "amount": `${body.amount}`,
        "returnUrl": `https://esc-eta.vercel.app?name=${body.fullname}&email=${body.email}&company=${body.company}`,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PAWAPAY_API}`,
        },
        body: JSON.stringify(depositRequest),
    }

    try {
        console.log('body', body)
        console.log(`https://esc-eta.vercel.app/funding/merchant?name=${body.fullname}&email=${body.email}&company=${body.company}&amount=${body.amount}`);
        
        const res = await fetch(`${BASEURL}/v1/widget/sessions`, options)

        const response = await res.json()

        return Response.json({redirectUrl: response.redirectUrl})
    } catch (error) {
        console.log('saht');
        
        return Response.json(JSON.stringify(error))
    }
}