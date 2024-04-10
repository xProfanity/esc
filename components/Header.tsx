"use client"

import { logo } from "@/assets";
import { Navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";


import { SheetDrawer, ThemeButton } from ".";
import Button from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 h-20 w-full flex flex-col justify-center items-center backdrop-blur-sm">
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

            <div className="md:w-4/5 lg:w-1/2 h-full md:flex hidden flex-row justify-end items-center">
                <ul className="flex flex-row justify-end items-center w-full gap-8">
                    {Navlinks.map((item, i) => (
                        <li key={i} className="font-semibold capitalize font-mont">
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <Link href={"/posts"}>
                        <Button>
                            Activities
                        </Button>
                    </Link>
                </div>

                <ThemeButton />
            </div>

            <div className="flex md:hidden flex-row-reverse justify-center items-center gap-5">
                
                <SheetDrawer />

                <ThemeButton />
            </div>
        </nav>
    </header>
  )
}
