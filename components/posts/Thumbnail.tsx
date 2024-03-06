import { Post } from "@/common";
import { fetchFeaturedPost } from "@/services/sanity";

export default async function Thumbnail() {

  try {
    const post = await fetchFeaturedPost() as Post

    return (
      <section className='h-screen w-full'>
          <div className="h-[calc(100%-5rem)] container border border-purple-500 mx-auto mt-20 flex flex-col justify-center items-center">
            <p className="text-white">{post?.title}</p>
          </div>
      </section>
    )
  } catch (error) {
    console.log('error', error)
    
    return (
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-white">Somthing went wrong</p>
      </section>
    )
  }
}
