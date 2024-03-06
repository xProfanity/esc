import { client } from "@/lib/sanity-client"

export async function fetchFeaturedPost() {
    const query = `*[_type == "post" && featured == true][0]`

    const response = await client.fetch(query)

    return response
}

export async function fetchRecentPosts() {
    const query = `*[_type == "post" && featured == false] | order(publishedAt desc)`

    const response = await client.fetch(query)

    return response
}