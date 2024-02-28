"use client"

import { motion } from "framer-motion"

import { Navlinks } from "@/constants"
import { base } from "@/context/store"
import Link from "next/link"
import { useSnapshot } from "valtio"

export default function Drawer() {
    const snap = useSnapshot(base)
  return (
    <motion.div
        initial={{x: "100%"}}
        animate={{x: snap.drawerOpen ? "100%" : 0, backgroundColor: snap.darkmode ? "transparent" : "#32cd32"}}
        transition={{duration: .5}}
        className="fixed h-full w-4/5 sm:w-1/2 z-40 right-0 bottom-0 backdrop-blur-2xl flex md:hidden flex-col justify-end items-center shadow-md shadow-black">
        <div className="h-[calc(100%-5rem)] w-full flex flex-col justify-start">
            {Navlinks.map((item, i) => (
                <p className="capitalize h-10 w-full py-5 px-5 hover:bg-[#011222] text-white font-bold text-3xl font-mont text-end">
                    <Link href={item.link}>
                        {item.name}
                    </Link>
                </p>
            ))}
        </div>
    </motion.div>
  )
}
