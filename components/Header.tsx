"use client"

import { logo } from "@/assets";
import { Navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSnapshot } from "valtio";

import { base } from "@/context/store";

export default function Header() {
    const snap = useSnapshot(base)

    const toggleThemeMode = () => {
        localStorage.setItem('darkmode', JSON.stringify(!snap.darkmode))

        base.darkmode = !snap.darkmode
    }

  return (
    <header className="absolute top-0 left-0 z-50 h-20 w-full flex flex-col justify-center items-center backdrop-blur-xl shadow-xl">
        <nav className="h-full w-11/12 flex flex-row justify-between items-center">
            <div className="relative h-20 w-28">
                <Image
                    src={logo}
                    fill
                    alt="logo"
                    className="object-contain"
                />
            </div>

            <div className="w-3/5 h-full flex flex-row justify-between items-center">
                <ul className="flex flex-row justify-around items-center w-full">
                    {Navlinks.map((item, i) => (
                        <li key={i} className="text-white capitalize">
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <button className="text-white h-10 w-32 border-2 border-primary rounded-full">CTA</button>
                </div>

                <div className="h-full flex flex-col justify-center items-center">
                    {snap.darkmode ? (
                        <button type="button" onClick={toggleThemeMode}>
                            <svg className="text-white h-6 w-6" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path>
                            </svg>
                        </button>
                    ) : (
                        <button type="button" onClick={toggleThemeMode}>
                            <svg className="h-6 w-6 text-white" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path>
                            </svg>
                        </button>

                    )}
                </div>
            </div>
        </nav>
    </header>
  )
}
