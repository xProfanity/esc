"use client"

import { Category, Post } from "@/common"
import { base } from "@/context/store"
import { urlFor } from "@/lib/sanity-client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useSnapshot } from "valtio"

type Props = {
    post: Post
}

export default function PostDetails({post}: Props) {
    const {darkmode} = useSnapshot(base)

    let previousWasListItem = false
    let currentList = [] as string[]
  return (
    <div className="h-auto container mt-20 mx-auto">
          <div className="relative w-full h-screen max-h-[45rem]">
            <Image
              src={urlFor(post.mainImage).fit("fill").url()}
              fill
              alt={`${post.slug.current}`}
              className="object-cover rounded-3xl"
            />
          </div>

          <motion.div animate={{backgroundColor: !darkmode ? "#e3e3e7" : "#0c0c0c"}} className="w-[95%] md:w-4/5 min-h-screen h-auto mx-auto -mt-48 relative shadow-md rounded-3xl pb-12">
            <div className="flex flex-row gap-4 mt-5 h-auto w-full px-4">
              {post.categories.map((category: Category) => (
                <span className="mt-10 flex flex-col justify-center items-center text-gray-400 text-sm font-mont font-bold">{category.title}</span>
              ))}
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-mont text-accent w-full px-4 mt-5">{post.title}</p>
            
            <div className="flex flex-row justify-between items-center w-full px-4 mt-10">
              <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-sm font-mont font-semibold">published by {post.author.name}</motion.p>

              <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-sm font-mont font-semibold">{new Date(post.publishedAt).toDateString()}</motion.p>
            </div>

            <div className="flex flex-col gap-5 w-full lg:w-5/6 px-2 lg:px-4 mt-10">
              {post.body.map((item, i) => {
                switch (item.style) {
                  case "h1":
                    return (
                      <>
                        {item.children.map((span) => (
                          <motion.h1 animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="font-bold font-mont text-pretty text-3xl md:text-4xl" key={span._key}>{span.text}</motion.h1>
                        ))}
                      </>
                    )
                  case "h2":
                    return (
                      <>
                        {item.children.map((span) => (
                          <motion.h2 animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="font-bold font-mont text-pretty text-2xl md:text-3xl" key={span._key}>{span.text}</motion.h2>
                        ))}
                      </>
                    )
                  case "h3":
                    return (
                      <>
                        {item.children.map((span) => (
                          <motion.h3 animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="font-bold font-mont text-pretty text-xl md:text-2xl" key={span._key}>{span.text}</motion.h3>
                        ))}
                      </>
                    )
                  case "h4":
                    return (
                      <>
                        {item.children.map((span) => (
                          <motion.h4 animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="font-bold font-mont text-pretty text-lg md:text-xl" key={span._key}>{span.text}</motion.h4>
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
                              <motion.li animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="font-mont text-base" key={i}>{bullet}</motion.li>
                            ))}
                          </ul>
                        )
                      }

                      return null
                    }
                    return (
                      <>
                        {item.children.map((span) => (
                          <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="font-mont text-base" key={span._key}>{span.text}</motion.p>
                        ))}
                      </>
                    )
                  case "quote":
                    return (
                      <>
                        {item.children.map((span) => (
                          <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} key={span._key}>{span.text}</motion.p>
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

          </motion.div>
        </div>
  )
}
