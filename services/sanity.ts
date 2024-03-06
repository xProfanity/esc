import { client } from "@/lib/sanity-client"

export async function fetchFeaturedPost() {
    const query = `*[_type == "post" && featured == true][0]`

    const response = await client.fetch(query)

    return response
}