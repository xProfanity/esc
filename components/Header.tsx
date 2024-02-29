"use client"

import { logo } from "@/assets";
import { Navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";

import { motion } from "framer-motion";

import { base } from "@/context/store";
import { ThemeButton } from ".";

export default function Header() {
    const snap = useSnapshot(base)

    const animateTextColor = {color: snap.darkmode ? '#fff' : '#011222'}

  return (
    <motion.header className="fixed top-0 left-0 z-50 h-20 w-full flex flex-col justify-center items-center backdrop-blur-md border-b">
        <nav className="h-full container mx-auto flex flex-row justify-between items-center">
            <div className="relative h-20 w-28">
                <Image
                    src={logo}
                    fill
                    alt="logo"
                    className="object-contain"
                />
            </div>

            <div className="md:w-4/5 lg:w-3/5 h-full md:flex hidden flex-row justify-between items-center">
                <ul className="flex flex-row justify-around items-center w-full">
                    {Navlinks.map((item, i) => (
                        <motion.li animate={animateTextColor} key={i} className="font-semibold capitalize">
                            <Link href={item.link}>{item.name}</Link>
                        </motion.li>
                    ))}
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <motion.button animate={animateTextColor} className="font-semibold h-10 w-32 border-2 border-primary rounded-full">CTA</motion.button>
                </div>

                <ThemeButton />
            </div>

            <div className="flex md:hidden flex-row-reverse justify-center items-center gap-5">
                <button type="button" onClick={() => base.drawerOpen = !snap.drawerOpen}>
                    <motion.svg animate={animateTextColor}  className="h-10 w-10" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </motion.svg>
                </button>

                <ThemeButton />
            </div>
        </nav>
    </motion.header>
  )
}
