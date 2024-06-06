import { Post } from "@/common";
import { PostDetails } from "@/components";
import { fetchPostBySlug, fetchRecentPosts } from "@/services/sanity";

type Params = {
  params: {
    slug: string;
  }
}

export default async function PostPage({params: {slug}}: Params) {

  try {
    const post = await fetchPostBySlug(slug) as Post
    const recentPosts = await fetchRecentPosts(true, post._id) as Post[]

    return (
      <section className="h-auto w-full pb-40">
        {post && recentPosts && (
          <PostDetails post={post} recentPosts={recentPosts} />
        )}
      </section>
    )
  } catch (error) {
    console.log('error', error)
    return (
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <p className="font-mont">OOps! Something went wrong</p>
      </section>
    )
  }
}