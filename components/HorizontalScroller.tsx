"use client"
import gsap from "gsap"
import { useLayoutEffect } from "react"

export default function HorizontalScroller() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            
        })

        return () => ctx.revert()
    }, [])
  return (
    <section className="h-screen w-full">
      <div className="h-screen border container mx-auto flex flex-nowrap"></div>
    </section>
  )
}
