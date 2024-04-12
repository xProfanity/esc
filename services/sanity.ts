import { client } from "@/lib/sanity-client"

export async function fetchPostById(id: string) {
    const query = `*[_type == "post" && _id == "${id}"] {
        title, synopsis, slug
    }`

    const response = await client.fetch(query)

    return response[0]
}

export async function fetchFeaturedPost() {
    const query = `*[_type == "post" && featured == true]`

    const response = await client.fetch(query)

    return response[0]
}

export async function fetchRecentPosts(excludeFeatured: boolean, excludedId?: string) {
    const query = `*[_type == "post"${!excludeFeatured ? " && featured == true " : ' '}&& _id != "${excludedId}"] | order(publishedAt desc) {
        ...,
        author -> {
            name,
            image
        }
    }`

    const response = await client.fetch(query)

    return response
}

export async function fetchPostBySlug(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0] {
        ...,
        author -> {
            name, image
        },
        categories[] -> {
            title,
            description,
            _id
        }
    }`

    const response = await client.fetch(query)

    return response
}