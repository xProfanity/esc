"use client"

import { objectives } from "@/constants";
import { base } from "@/context/store";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { useSnapshot } from "valtio";


gsap.registerPlugin(ScrollTrigger)

export default function Objectives() {
  const container = useRef<HTMLDivElement>(null)
  const pinnedText = useRef<HTMLDivElement>(null)

  const snap = useSnapshot(base)

  useLayoutEffect(() => {
    if(window.innerWidth > 767) {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: "#section",
          pin: "#textContainer",
          start: 'top 20%',
          end: 'bottom 80%',
        });
  
        // gsap.to(".animate-text-down", {
        //   y: 100,
        //   duration: 7,
        //   scrollTrigger: {
        //     trigger: "#section",
        //     start: 'top 20%',
        //     end: 'bottom bottom',
        //     scrub: 1.5
        //   }
        // });
      })
  
      return () => ctx.revert()
    }

  }, [])

  return (
    <section className="h-auto w-full">
      <div className="h-full mx-auto container flex flex-col justify-start items-start pb-20">
   
        <div className="h-32 w-full flex flex-col justify-start items-center">
          <h1 className="p-3 border-2 border-accent text-accent font-mont font-bold rounded-full">objectives</h1>
        </div>

        <div id="section" className="flex flex-col md:flex-row justify-start md:justify-between items-start">
          <div className="w-full md:w-2/5 h-96 md:h-full relative ">
            <div id="textContainer">
              <motion.h1 animate={{color: snap.darkmode ? "#fff" : "#011222"}} className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-extrabold font-mont 
              text-white text-center md:text-left animate-text-down">
                The Environment, Society & Culture
              </motion.h1>

              <motion.p animate={{color: snap.darkmode ? "#fff" : "#011222"}} className="text-sm sm:text-lg md:text-xl text-center md:text-left font-medium font-mont mt-10 w-full lg:w-2/3 animate-text-down">Our organization aims to promote environmental sustainability, advocate for social justice and economic integrity, and foster health and cultural preservation. Together, we strive for a more sustainable, equitable, and healthy future</motion.p>
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex flex-col gap-10 lg:gap-20">
            {objectives.map((objective, index) => (
              <Objective objective={objective} key={index} />
            ))}
          </div>
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
  },
}

const Objective = ({objective}: ObjProps) => {
  return (
    <div className="h-auto w-2/3 bg-primary rounded-3xl p-2 pb-5 lg:pb-10">
      <div className="h-auto py-1 w-11/12 mx-auto flex flex-row justify-start items-center">
        <p className="text-3xl lg:text-5xl text-[#011222] font-mont font-bold ">{objective.objective}</p>
      </div>

      <div className="mt-1 w-11/12 mx-auto">
        <p className="text-[#011222] font-bold font-mont text-lg lg:text-lg text-left w-full">{objective.content}</p>
      </div>

      <div className="mt-5 w-11/12 mx-auto">
        <button type="button" className="flex flex-row justify-start items-center gap-2">
          <p className="text-white text-xl">Read more</p>
          <span className="text-white text-xl">{"==>"}</span>
        </button>
      </div>

      {/* <ul className="w-11/12 h-auto mx-auto mt-5 lg:mt-10 flex flex-col justify-start items-start gap-2 lg:gap-4 list-disc">
        {objective.points.map((point, index) => (
          <li key={index}>
            <p className="text-xs lg:text-sm font-mont text-white font-bold mx-auto">{point}</p>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
