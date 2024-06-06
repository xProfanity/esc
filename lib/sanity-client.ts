import { SanityImage } from "@/common";
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    apiVersion: '2022-03-07',
    dataset: 'production',
    perspective: 'raw'
})

const builder = imageUrlBuilder(client)

const urlFor = (source: SanityImage) => source && builder.image(source)

export { client, urlFor };

