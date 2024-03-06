import { DArrow } from "@/assets";
import { Post } from "@/common";
import { urlFor } from "@/lib/sanity-client";
import Image from "next/image";

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
    <div className="h-full w-full relative rounded-3xl overflow-hidden">
        <div className="absolute z-0 h-full w-full">
            <Image
                src={urlFor(featuredPost.mainImage).fit("fill").url()}
                fill
                alt="post thumbnail"
                blurDataURL=""
                className="object-cover"
            />
        </div>

        <div className="absolute z-10 h-full w-full backdrop-brightness-50 flex flex-col justify-end items-start pb-10">
            <div className="w-[95%] mx-auto flex flex-row">
                <div className="w-3/4 flex flex-col gap-3">
                    <p className="text-[#e3e3e7] font-semibold font-mont text-lg">Featured</p>
                    <p className="text-4xl w-full text-[#e3e3e7] font-bold font-mont">{featuredPost.title}</p>
                    <p className="w-3/4 text-[#e3e3e7] text-sm">{`${fetchParagraph()?.text}`}</p>
                </div>
                <div className="w-1/4 flex flex-col justify-center items-end">
                    <button type="button">
                        <Image
                            src={DArrow}
                            height={80}
                            width={80}
                            alt="diagonal arrow"
                            className="object-contain"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
