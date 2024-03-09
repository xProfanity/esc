import { fetchRecentPosts } from "@/services/sanity"

import RecentPostsText from "@/app/posts/RecentPostsText"
import { Post } from "@/common"
import { PostCard } from ".."

export default async function RecentPosts() {

    try {
        const posts = await fetchRecentPosts() as Post[]

        return (
            <section className="h-auto w-full relative pb-36">
                <div className="container mx-auto flex flex-col px-10">
                    <RecentPostsText />
    
                    <div className="h-auto w-full flex flex-row flex-wrap gap-6 mt-4">
                        {posts.map((post) => (
                            <div key={post._id} className="w-[30%] min-w-[330px] mx-auto md:mx-0">
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
