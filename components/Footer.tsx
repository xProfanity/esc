import { logo } from "@/assets";
import { Navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-auto py-16 w-full flex flex-col justify-start items-start bg-[#011222]">
        <div className="h-16 w-full flex flex-col justify-center items-center">
            <Image
                src={logo}
                height={100}
                width={100}
                alt="logo"
                className="object-contain grayscale"
            />
        </div>

        <ul className="mt-20 w-full flex flex-row justify-center items-center gap-10">
            {Navlinks.map((item, i) => (
                <li key={i} className=" capitalize font-bold font-mont">
                    <Link href={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>

        <div className="mt-16 w-full flex flex-col justify-center items-center ">
            <div className="border-t h-1 w-1/2"></div>
        </div>

        <div className="w-full h-10 mt-10 flex flex-col justify-center items-center">
            <p className=" text-sm font-mont">&copy; copyright 2024</p>
        </div>
    </footer>
  )
}
