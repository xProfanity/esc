import { DArrow } from "@/assets";
import { Post } from "@/common";
import { urlFor } from "@/lib/sanity-client";
import Image from "next/image";
import Link from "next/link";

interface Props {
    featuredPost: Post;
}

export default function ThumbnailContent({featuredPost}: Props) {
    const fetchParagraph = () => {
        for(let item of featuredPost.body) {
            if (item.style === "normal") return item.children[0]
        }
    }
  return (
    <div className="h-full w-full relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute z-0 h-full w-full">
            <Image
                src={urlFor(featuredPost.mainImage).fit("fill").url()}
                fill
                alt="post thumbnail"
                blurDataURL=""
                className="object-cover"
            />
        </div>

        <div className="absolute z-10 h-full w-full backdrop-brightness-[.3] md:backdrop-brightness-50 flex flex-col justify-end items-start pb-10">
            <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-8 md:gap-0">
                <div className="w-full md:w-4/5 lg:w-3/4 flex flex-col gap-3">
                    <p className="text-white font-semibold font-mont text-lg">Featured</p>
                    <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full  font-extrabold md:font-bold font-mont">{featuredPost.title}</p>
                    <p className="text-white w-full md:w-3/4 text-xs lg:text-sm">{`${fetchParagraph()?.text}`}</p>
                </div>
                <div className="w-full md:w-1/5 lg:w-1/4 hidden md:flex flex-col justify-center items-end">
                    <Link type="button" href={`/posts/${featuredPost.slug.current}`}>
                        <div className="relative h-[60px] xl:h-[80px] w-[60px] xl:w-[80px]">
                            <Image
                                src={DArrow}
                                fill
                                alt="diagonal arrow"
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>
                <div className="w-full md:w-1/5 lg:w-1/4 flex md:hidden flex-col justify-center items-start">
                    <Link type="button" href={`/posts/${featuredPost.slug.current}`}>
                        <button type="button" className="p-4 bg-primary text-white font-semibold font-mont">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
