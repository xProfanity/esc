"use client"

import { Category, Post } from "@/common"
import { urlFor } from "@/lib/sanity-client"
import MuxVideoPlayer from "@mux/mux-player-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Loader, PostCard } from ".."
import { AspectRatio } from "../ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

type Props = {
    post: Post;
    recentPosts: Post[];
}

type PostMedia = {
  video: boolean;
  src: string;
}

export default function PostDetails({post, recentPosts}: Props) {

    const [playbackVid, setPlaybackVid] = useState<string | null>(null)

    const [isLoading, setIsLoading] = useState(false)

    const [postMedia, setPostMedia] = useState<PostMedia[]>([])

    let previousWasListItem = false
    let currentList = [] as string[]

    useEffect(() => {
      const getVideoPlayback = async () => {
        const fileRef = {file: post.video?.asset._ref}

        try {
          setIsLoading(true)
          const response = await fetch('/api/mux', {method: "POST", body: JSON.stringify(fileRef)})

          const asset = await response.json() as {url: string}

          setPlaybackVid(asset.url)
        } catch (error) {
          console.log('error', error)
          setIsLoading(false)
        } finally {
          setIsLoading(false)
        }
      }

      const getImagesArray = () => {
        const data = []

        data.push({
          video: false,
          src: urlFor(post.mainImage)?.fit("fill")?.url()
        })

        if(post.media) {
          for(let img of post.media) {
            data.push({
              video: false,
              src: urlFor(img)?.fit("fill")?.url()
            })
          }
        }

        setPostMedia(data)
      }

      if(post.video) {
        getVideoPlayback()
      }

      getImagesArray()
    }, [])
  return (
    <div className="h-auto container mt-24 mx-auto flex flex-col relative">
    
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-mont text-accent w-full px-4 py-5">
        {post.title}
      </p>

      <Carousel className="h-auto w-full lg:py-10">
        <CarouselContent>
          {post.video && playbackVid && (
          <CarouselItem>
            <>
              {isLoading ? (
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <AspectRatio ratio={13/5} className={`h-auto relative ${post.video && 'w-fit mx-auto rounded-3xl overflow-hidden'}`}>
                  <MuxVideoPlayer src={playbackVid} accentColor="#32cd32" className="rounded-3xl h-full w-full relative" title={post.title} />
                </AspectRatio>
              )}
            </>
          </CarouselItem>
          )}

          {postMedia.length > 0 && postMedia.map((item, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={13/5} className={`h-auto w-11/12 md:w-auto md:relative mx-auto rounded-3xl overflow-hidden`}>
                    <Image
                      src={item?.src}
                      fill
                      alt={`${post.slug.current}`}
                      className="object-cover rounded-3xl"
                    />
                </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

          <div className="w-full min-h-screen h-auto mx-auto relative pb-12 pr-2">
            <div className="flex flex-row gap-4 mt-5 h-auto w-full px-4">
              {post.categories.map((category: Category, index) => (
                <span key={index} className="mt-10 flex flex-col justify-center items-center text-gray-400 text-sm font-mont font-bold">{category.title}</span>
              ))}
            </div>
            
            <div className="flex flex-row justify-between items-center w-[95%] md:w-full mx-auto px-4 mt-10">
              <p className="text-sm font-mont font-semibold">published by {post.author.name}</p>

              <p className="text-sm font-mont font-semibold">{new Date(post.publishedAt).toDateString()}</p>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row">
              <div className="flex flex-col gap-5 w-5/6 mx-auto lg:w-2/3 px-2 lg:px-4 mt-10 text-justify">
                {post.body.map((item, i) => {
                  switch (item.style) {
                    case "h1":
                      return (
                        <>
                          {item.children.map((span) => (
                            <h1 className="font-bold font-mont text-pretty text-3xl md:text-4xl" key={span._key}>{span.text}</h1>
                          ))}
                        </>
                      )
                    case "h2":
                      return (
                        <>
                          {item.children.map((span) => (
                            <h2 className="font-bold font-mont text-pretty text-2xl md:text-3xl" key={span._key}>{span.text}</h2>
                          ))}
                        </>
                      )
                    case "h3":
                      return (
                        <>
                          {item.children.map((span) => (
                            <h3 className="font-bold font-mont text-pretty text-xl md:text-2xl" key={span._key}>{span.text}</h3>
                          ))}
                        </>
                      )
                    case "h4":
                      return (
                        <>
                          {item.children.map((span) => (
                            <h4 className="font-bold font-mont text-pretty text-lg md:text-xl" key={span._key}>{span.text}</h4>
                          ))}
                        </>
                      )
                    case "normal":
                      if(item.listItem) {
                        if(!previousWasListItem) {
                          currentList = []
                        }

                        currentList.push(item.children[0].text)

                        previousWasListItem = true

                        if(!post.body[i+1].listItem || i === post.body.length -1) {
                          previousWasListItem = false

                          return (
                            <ul className="list-disc flex flex-col gap-1 w-full px-10 mx-auto">
                              {currentList.map((bullet, i) => (
                                <li className="font-mont text-base" key={i}>{bullet}</li>
                              ))}
                            </ul>
                          )
                        }

                        return null
                      }
                      return (
                        <>
                          {item.children.map((span) => (
                            <p className="font-mont text-base" key={span._key}>{span.text}</p>
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
                        <div key={i} className="relative h-[400px] w-full rounded overflow-hidden">
                          <Image
                            src={urlFor(item?.asset)?.fit("fill")?.url()}
                            fill
                            alt="block image"
                            className="object-cover"
                          />
                        </div>
                      )
                  }
                })}
              </div>

              <div className="w-4/5 mx-auto md:w-full lg:w-1/3 h-full mt-10 flex flex-col gap-10">
                <p className="font-bold font-mont text-pretty text-3xl md:text-4xl">More Posts</p>
                <div className="w-full flex flex-row flex-wrap lg:flex-col gap-10">
                  {recentPosts.map((post) => (
                    <div key={post._id} className="mx-auto">
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
