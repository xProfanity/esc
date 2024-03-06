import { client } from "@/lib/sanity-client"

export async function fetchFeaturedPost() {
    const query = `*[_type == "post" && featured == true]`

    const response = await client.fetch(query)

    return response[0]
}

export async function fetchRecentPosts() {
    const query = `*[_type == "post" && featured == false] | order(publishedAt desc) {
        ...,
        author -> {
            name,
            image
        }
    }`

    const response = await client.fetch(query)

    return response
}