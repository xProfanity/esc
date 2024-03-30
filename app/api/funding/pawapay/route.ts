const BASEURL = process.env.NODE_ENV === "development" ? "https://api.sandbox.pawapay.cloud/" : "https://api.pawapay.cloud/"

export function GET() {

    return Response.json({message: `Connected`})
}

export async function POST(req: Request) {
    const body = await req.json()

    if(body.amount === '') return Response.json({error: 'amount required'})

    return Response.json({message: `welcome ${body?.fullname}, thanks for the ${body.amount}`})
}