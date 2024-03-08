"use client"

import { Post } from "@/common";
import { base } from "@/context/store";
import { urlFor } from "@/lib/sanity-client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";

type Props = {
    post: Post;
}

export default function PostCard({post}: Props) {

    const {darkmode} = useSnapshot(base)


  return (
    <div className="w-full flex flex-col">
        <div className="relative w-full h-[280px]">
            <Image
                src={urlFor(post.mainImage).fit("fill").url()}
                fill
                alt="thumbnail"
                className="object-cover rounded-3xl"
            />
        </div>

        <Link href={`/posts/${post.slug.current}`}>
            <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-sm hover:underline font-bold font-mont mt-4 h-16 px-2">{post.title}</motion.p>
        </Link>

        <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-sm font-mont px-2 h-20">{post.synopsis}</motion.p>

        <div className="mt-5 flex flex-row px-2 justify-start items-center gap-2">
            <Image
                src={urlFor(post.author.image).height(60).width(60).url()}
                height={25}
                width={25}
                alt={`${post.author.name}`}
                className="object-cover rounded-full"
            />

            <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-sm font-semibold font-mont">{post.author.name}</motion.p>
            
            <motion.span animate={{color: darkmode ? "#e3e3e7" : "#011222"}}>●</motion.span>

            <motion.p animate={{color: darkmode ? "#e3e3e7" : "#011222"}} className="text-sm font-mont font-semibold">{new Date(post.publishedAt).toDateString()}</motion.p>
            
        </div>
    </div>
  )
}
