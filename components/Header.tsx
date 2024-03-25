"use client"

import { logo } from "@/assets";
import { Navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";

import { motion } from "framer-motion";

import { base } from "@/context/store";
import { ThemeButton } from ".";
import Button from "./ui/button";

export default function Header() {
    const snap = useSnapshot(base)

  return (
    <motion.header className="absolute top-0 left-0 z-50 h-20 w-full flex flex-col justify-center items-center backdrop-blur-sm">
        <nav className="h-full w-[95%] md:container mx-auto flex flex-row justify-between items-center">
            <div className="relative h-16 w-16">
                <Link href={"/"}>
                    <Image
                        src={logo}
                        fill
                        alt="logo"
                        className="object-cover"
                    />
                </Link>
            </div>

            <div className="md:w-4/5 lg:w-1/2 h-full md:flex hidden flex-row justify-between items-center">
                <ul className="flex flex-row justify-around items-center w-full">
                    {Navlinks.map((item, i) => (
                        <li key={i} className="font-semibold capitalize font-mont">
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <Button outline>
                        Funding
                    </Button>
                </div>

                <ThemeButton />
            </div>

            <div className="flex md:hidden flex-row-reverse justify-center items-center gap-5">
                <button type="button" onClick={() => base.drawerOpen = !snap.drawerOpen}>
                    <svg  className="h-10 w-10" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>

                <ThemeButton />
            </div>
        </nav>
    </motion.header>
  )
}
