import { Post } from "@/common";
import { fetchFeaturedPost } from "@/services/sanity";
import { ThumbnailContent } from "..";

export default async function Thumbnail() {

  try {
    const post = await fetchFeaturedPost() as Post

    return (
      <section className='h-screen max-h-[45rem] w-full'>
          <div className="h-[calc(100%-5rem)] container mx-auto mt-20">
            <ThumbnailContent featuredPost={post} />
          </div>
      </section>
    )
  } catch (error) {
    console.log('error', error)
    
    return (
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-white">Something went wrong</p>
      </section>
    )
  }
}
