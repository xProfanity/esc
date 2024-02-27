"use client"

import { motion } from "framer-motion"

import { base } from '@/context/store'
import { useSnapshot } from 'valtio'

export default function ThemeButton() {

    const snap = useSnapshot(base)

    const toggleThemeMode = () => {
        localStorage.setItem('darkmode', JSON.stringify(!snap.darkmode))

        base.darkmode = !snap.darkmode
    }

    const animateTextColor = {color: snap.darkmode ? '#fff' : '#011222'}

  return (
    <div className="h-full flex flex-col justify-center items-center">
        {snap.darkmode ? (
            <button type="button" onClick={toggleThemeMode}>
                <motion.svg animate={animateTextColor} className="h-8 w-8" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path>
                </motion.svg>
            </button>
        ) : (
            <button type="button" onClick={toggleThemeMode}>
                <motion.svg animate={animateTextColor} className="h-8 w-8" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path>
                </motion.svg>
            </button>

        )}
    </div>
  )
}
