"use client"

import { layered } from '@/assets'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SvgLayer() {
    const [toggleSvgLayer, setToggleSvgLayer] = useState<boolean | null>()

    const {resolvedTheme} = useTheme()

    useEffect(() => {
        if(resolvedTheme === "dark") {
            setToggleSvgLayer(true)
        } else {
            setToggleSvgLayer(false)
        }
    }, [resolvedTheme])
  return (
    <div className={`absolute h-screen w-full max-[526px]:hidden ${toggleSvgLayer && 'hidden'}`}>
        <Image src={layered} fill alt="svg" className="object-cover" />
    </div>
  )
}
