"use client"

import { objectives } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger)

export default function AfterHero() {
  const container = useRef<HTMLDivElement>(null)
  const pinnedText = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#section",
        pin: "#textContainer",
        start: 'top 20%',
        end: 'bottom bottom',
      });

      gsap.to("#text", {
        y: 40,
        duration: 7,
        scrollTrigger: {
          trigger: "#section",
          start: 'top 20%',
          end: 'bottom bottom',
          scrub: 1.5
        }
      });
    })

    return () => ctx.revert()

  }, [])

  return (
    <section id="section" className="h-[270vh] w-full">
      <div className="h-full mx-auto container grid-cols-2 grid-rows-1 grid">
        <div className="col-span-1 row-span-1 relative">
          <div id="textContainer">
            <p id="text" className="text-7xl font-extrabold font-mont text-white">
              The Registered Trustees of the Environment, Society & Culture
            </p>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col gap-20">
          {objectives.map((objective, index) => (
            <Objective objective={objective} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ObjProps {
  objective: {
    content: string;
    objective: string;
    points: string[];
  }
}

const Objective = ({objective}: ObjProps) => {
  return (
    <div className="h-auto w-full bg-gradient-to-br to-primary via-[#55cf55] from-[#7ed97e] rounded-3xl p-2 pb-10">
      <div className="h-auto py-1 w-full flex flex-row justify-center items-center">
        <p className="text-5xl text-white font-mont font-bold ">{objective.objective}</p>
      </div>

      <div className="mt-1 w-11/12 mx-auto">
        <p className="text-[#011222] font-bold font-mont text-sm text-justify">{objective.content}</p>
      </div>

      <ul className="w-4/5 h-auto mx-auto mt-10 flex flex-col justify-start items-start gap-4 list-disc">
        {objective.points.map((point, index) => (
          <li key={index}>
            <p className="text-sm font-mont text-white font-bold mx-auto">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
