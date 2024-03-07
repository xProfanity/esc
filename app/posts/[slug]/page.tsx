"use client"

import { Category, Post } from "@/common";
import { urlFor } from "@/lib/sanity-client";
import { fetchPostBySlug } from "@/services/sanity";
import Image from "next/image";
import { useParams } from "next/navigation";

type Props = {
  slug: string;
}

type Params = {
  slug: string;
}

export default function Post() {
    const params = useParams() as Params

  return <RenderPostPage slug={params.slug} />
}

async function RenderPostPage({slug}: Props) {


  try {
    const post = await fetchPostBySlug(slug) as Post

    return (
      <section className="h-auto w-full">
        <div className="h-auto container mt-20 mx-auto">
          <div className="relative w-full h-screen max-h-[45rem]">
            <Image
              src={urlFor(post.mainImage).fit("fill").url()}
              fill
              alt={`${slug}`}
              className="object-cover rounded-3xl"
            />
          </div>

          <div className="w-4/5 min-h-screen h-auto -mt-48 relative bg-[#e3e3e7] mx-auto shadow-md rounded-3xl">
            <div className="flex flex-row gap-4 mt-5 h-auto w-full px-4">
              {post.categories.map((category: Category) => (
                <span className="h-10 mt-10 w-28 flex flex-col justify-center items-center bg-accent text-[#e3e3e7] text-sm font-mont font-bold">{category.title}</span>
              ))}
            </div>

            <p className="text-5xl font-extrabold font-mont text-[#011222] w-full px-4 mt-5">{post.title}</p>
            
            <div className="flex flex-row justify-between items-center w-full px-4 mt-10">
              <p className="text-sm font-mont text-[#011222] font-semibold">published by {post.author.name}</p>

              <p className="text-sm font-mont text-[#011222] font-semibold">{new Date(post.publishedAt).toDateString()}</p>
            </div>

            <div className="flex flex-col gap-10 w-full px-4 mt-10">
              {post.body.map((item) => {
                switch (item.style) {
                  case "h1":
                    return (
                      <>
                        {item.children.map((span) => (
                          <h1 className="font-bold font-mont text-[#011222] text-pretty text-4xl" key={span._key}>{span.text}</h1>
                        ))}
                      </>
                    )
                  case "h2":
                    return (
                      <>
                        {item.children.map((span) => (
                          <h2 className="font-bold font-mont text-[#011222] text-pretty text-3xl" key={span._key}>{span.text}</h2>
                        ))}
                      </>
                    )
                  case "h3":
                    return (
                      <>
                        {item.children.map((span) => (
                          <h3 className="font-bold font-mont text-[#011222] text-pretty text-2xl" key={span._key}>{span.text}</h3>
                        ))}
                      </>
                    )
                  case "h4":
                    return (
                      <>
                        {item.children.map((span) => (
                          <h4 className="font-bold font-mont text-[#011222] text-pretty text-xl" key={span._key}>{span.text}</h4>
                        ))}
                      </>
                    )
                  case "normal":
                    return (
                      <>
                        {item.children.map((span) => (
                          <p className="font-mont text-[#011222] text-lg" key={span._key}>{span.text}</p>
                        ))}
                      </>
                    )
                  case "quote":
                    return (
                      <>
                        {item.children.map((span) => (
                          <p key={span._key}>{span.text}</p>
                        ))}
                      </>
                    )
                  default:
                    return(
                      <div className="relative h-[400px] w-full">
                        <Image
                          src={urlFor(item.asset).fit("fill").url()}
                          fill
                          alt="block image"
                          className="object-contain"
                        />
                      </div>
                    )
                }
              })}
            </div>

          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.log('error', error)
    return (
      <section className="h-screen w-full flex flex-col justify-center items-center">
        <p className="text-[#011222] font-mont">Something went wrong</p>
      </section>
    )
  }
}