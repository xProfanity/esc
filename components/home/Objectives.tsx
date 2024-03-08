"use client"

import { objectives } from "@/constants";
import { base } from "@/context/store";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react";
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
   
        <div className="h-32 w-full flex flex-col justify-start items-center mt-36">
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
    const [expanded, setExpanded] = useState(false)

    const expandPanel = () => setExpanded((current) => !current)

  return (
    <div className="h-96 w-[95%] mx-auto md:mx-0 md:w-full lg:w-2/3 overflow-hidden relative">
      <div className={`h-full w-full bg-primary rounded-3xl ${expanded ? 'overflow-y-scroll' : 'overflow-y-hidden'} overflow-x-hidden relative`}>

        <div className="h-auto py-1 w-11/12 mx-auto flex flex-row justify-start items-center mt-5">
          <p className="text-3xl lg:text-5xl text-[#011222] font-mont font-bold ">{objective.objective}</p>
        </div>

        <div className="mt-7 w-11/12 mx-auto">
          <p className="text-[#011222] font-bold font-mont text-sm md:text-lg lg:text-lg text-left w-full">{objective.content}</p>
        </div>

        <div className="mt-10 w-11/12 mx-auto">
          <button type="button" className="flex flex-row justify-start items-center gap-2" onClick={expandPanel}>
            <p className="text-white text-xl">Read more</p>
            <span className="text-white text-xl">{"==>"}</span>
          </button>
        </div>
      </div>
      <motion.div
        initial={{x: '100%'}}
        animate={{x: expanded ? 0 : '100%'}}
        transition={{duration: .5}}
        className="h-full w-full absolute bg-[#0c0c0c] flex flex-col justify-center items-center top-0 left-0 rounded-2xl">
        <ul className="w-11/12 mx-auto flex flex-col gap-2 overflow-y-scroll object-panel">
          {objective.points.map((point, i) => (
            <li className="w-full py-2 flex flex-row justify-start items-start gap-3">
              <span className="h-12 w-12 text-sm flex flex-col justify-center items-center rounded-full bg-accent text-white">{i+1}</span>
              <p className="text-white font-bold font-mont text-xs text-left w-full">{point}</p>
            </li>
          ))}
        </ul>

        <button type="button" onClick={expandPanel} className="text-lg font-bold text-white mt-10">
          close
        </button>
      </motion.div>
    </div>
  )
}
