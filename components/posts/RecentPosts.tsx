import { fetchRecentPosts } from "@/services/sanity"

import { Post } from "@/common"
import { PostCard } from ".."

export default async function RecentPosts() {

    try {
        const posts = await fetchRecentPosts() as Post[]

        return (
            <section className="h-auto w-full relative">
                <div className="container mx-auto flex flex-col px-10">
                    <p className="text-xl font-bold font-mont">Recent blog Posts</p>
    
                    <div className="h-auto w-full flex flex-row flex-wrap">
                        {posts.map((post) => (
                            <div key={post._id}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
            
    } catch (error) {
        console.log('error', error)

        return (
            <section className="h-auto w-full relative">
                <div className="container mx-auto flex flex-col px-10">
                    <p className="text-xl font-bold font-mont text-red-500">OOps! Something went wrong</p>
                </div>
            </section>
        )
    }
}
