"use client"

import { useTheme } from 'next-themes'

export default function GridBoxes() {
    const {resolvedTheme} = useTheme()

  return (
    <div className={`absolute pointer-events-none inset-0 ${resolvedTheme === "light" ? 'hidden' : 'flex'} items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}></div>
  )
}
