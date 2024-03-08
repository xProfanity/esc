import { PostDetails } from "@/components";
import { fetchPostBySlug } from "@/services/sanity";

type Params = {
  params: {
    slug: string;
  }
}

export default async function PostPage({params: {slug}}: Params) {

  try {
    const post = await fetchPostBySlug(slug)

    return (
      <section className="h-auto w-full pb-40">
        <PostDetails post={post} />
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