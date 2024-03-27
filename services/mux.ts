import { mux } from "@/lib/mux"

export async function fetchVideoPlaybackId (videoAsset: string) {
    if(videoAsset) {
      const file = videoAsset
                        .replace('file-', '')
                        .replace('-m4v', '.m4v')

      try {
        const asset = await mux.video.assets.create({
          input: [
            {
              url: `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECTID}/production/${file}`,
              type: 'video'
            }
          ],
          playback_policy: ['public'],
          encoding_tier: 'baseline'
        })

        return asset
      } catch (error) {
        console.log('error', error)

        throw "Something went wrong"
      }
    }

    throw "Video not found"
}