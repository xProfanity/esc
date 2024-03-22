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
        </div>

        <div id="section" className="flex flex-col md:flex-row justify-start md:justify-between items-start">
          <div className="w-full md:w-2/5 h-96 md:h-full relative ">
            <div id="textContainer">
              <h1 className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-extrabold font-mont
               text-center md:text-left animate-text-down">
                The Environment, Society & Culture
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-center md:text-left font-medium font-mont mt-10 w-full lg:w-2/3 animate-text-down">Our organization aims to promote environmental sustainability, advocate for social justice and economic integrity, and foster health and cultural preservation. Together, we strive for a more sustainable, equitable, and healthy future</p>
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
      <div className={`h-full w-full backdrop-blur-lg bg-primary/70 shadow-lg rounded-3xl ${expanded ? 'overflow-y-scroll' : 'overflow-y-hidden'} overflow-x-hidden relative`}>

        <div className="h-auto py-1 w-11/12 mx-auto flex flex-row justify-start items-center mt-5">
          <p className="text-3xl lg:text-5xl  font-mont font-bold ">{objective.objective}</p>
        </div>

        <div className="mt-7 w-11/12 mx-auto">
          <p className="text-sm sm:text-lg text-left font-medium font-mont w-full">{objective.content}</p>
        </div>

        <div className="mt-10 w-11/12 mx-auto">
          <button type="button" className="flex flex-row justify-start items-center gap-2" onClick={expandPanel}>
            <p className="text-white text-xl">Read more</p>
            <span className="text-white text-xl">
              <svg className="h-6 w-6" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>  
            </span>
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
            <li key={i} className="w-full py-2 flex flex-row justify-start items-start gap-3">
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
