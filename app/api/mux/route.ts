
export async function POST(req: Request) {

    const body = await req.json()

    const videoAsset = body.file

    const file = videoAsset
                        .replace('file-', '')
                        .replace('-m4v', '.m4v')
                        .replace('-mp4', '.mp4')
                        .replace('-mkv', '.mkv')
                        .replace('-avi', '.avi')
                        .replace('-wmv', '.wmv')
                        .replace('-webm', '.webm')
                        .replace('-mpeg', '.mpeg')
                        .replace('-3gp', '.3gp')

    return Response.json({url: `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECTID}/production/${file}`})
}