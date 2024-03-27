
export async function POST(req: Request) {

    const body = await req.json()

    const videoAsset = body.file

    const file = videoAsset
                        .replace('file-', '')
                        .replace('-m4v', '.m4v')

      try {
        // const asset = await mux.video.assets.create({
        //   input: [
        //     {
        //       url: `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECTID}/production/${file}`,
        //       type: 'video'
        //     }
        //   ],
        //   playback_policy: ['public'],
        //   encoding_tier: 'baseline'
        // })

        return Response.json({url: `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECTID}/production/${file}`})
      } catch (error) {
        console.log('error', error)

        return Response.json({error})
      }
}