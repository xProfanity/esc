"use client"

import { silhouette, street } from "@/assets"
import { base } from "@/context/store"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useSnapshot } from "valtio"
import { BackgroundRainbow } from ".."

export default function Hero() {

  return (
    <section className="h-[120vh] max-h-[924px] w-full relative z-10">
        <BackgroundRainbow />
        <div className="h-full w-full relative z-10">
            <div className="h-full flex flex-col justify-start items-start">
                <div className="lg:my-auto container mx-auto flex flex-col lg:flex-row justify-between item-center relative z-0">
                        <div className="w-full h-full flex flex-col justify-start items-center sm:items-start gap-10 lg:justify-center mt-56 lg:-mt-10">
                            {/* <Objectives /> */}
                            <Niche />
                            <CTA />
                        </div>
                        <div className="relative w-full h-full mt-0 lg:-mt-10">
                            <HeroImage />
                        </div>
                        {/* <SomeSVG />
                        <Contacts /> */}
                </div>
                <div className="flex w-full -mt-10 absolute bottom-0 -z-10 lg:relative lg:z-10">
                    <div className="h-12 w-[120vw] -rotate-6 -ml-10 bg-accent flex flex-col justify-center items-center relative">
                        <p className="font-bold font-mont text-xl text-nowrap text-center">
                            ● The Registered trustees of Environment, Society & Culture (ESC) ● The Registered trustees of Environment, Society & Culture (ESC) ● The Registered trustees of Environment, Society & Culture (ESC) ● The Registered trustees of Environment, Society & Culture (ESC) ●
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

const Niche = () => {
    const snap = useSnapshot(base)
    
    return (
        <div className="flex flex-col justify-center items-center">
            <motion.p animate={{color: snap.darkmode ? '#e3e3e7' : '#011222'}} className="text-3xl sm:text-5xl font-extrabold font-mont uppercase text-center sm:text-left">Empowering Communities for a Sustainable Future</motion.p>
            <motion.p animate={{color: snap.darkmode ? '#ccc' : '#011222'}} className="text-lg font-bold font-mont capitalize text-center sm:text-left w-full mt-10">Strengthening communities to face challenges head-on and thrive.</motion.p>
        </div>
    )
}

const HeroImage = () => {
    const snap = useSnapshot(base)

    return (
        <div className="relative rounded-3xl z-10 h-full lg:flex lg:flex-col lg:justify-center">
            <div className="absolute h-[300px] sm:h-[350px] md:h-[400px] lg:h-[350px] xl:h-[400px] w-5/6 sm:w-[450px] md:w-[500px] lg:w-[450px] xl:w-[500px] left-1/2 -translate-x-1/2 sm:-translate-x-1/3 lg:-translate-x-1/3 lg:right-0 mt-28 sm:mt-24 lg:mt-0">
                <Image
                    src={street}
                    fill
                    alt="streets"
                    className="object-cover rounded-3xl"
                    placeholder="blur"
                />
                <div className="absolute h-40 w-40 rounded-2xl bg-transparent backdrop-blur-lg flex flex-col justify-center items-center top-0 right-0 -translate-y-1/2 shadow-md">
                    <motion.p animate={{color: snap.darkmode ? '#fff' : "#32cd32"}} className="text-lg font-bold font-mont">ESTO</motion.p>
                    <motion.p animate={{color: snap.darkmode ? '#fff' : "#32cd32"}} className="text-lg font-bold font-mont">July 2017</motion.p>
                </div>
                    <div className="absolute sm:h-[250px] md:h-[300px] lg:h-[250px] xl:h-[300px] sm:w-[300px] md:w-[350px] lg:w-[300px] xl:w-[350px] rounded-3xl bottom-0 sm:left-0 lg:right-0 xl:left-0 sm:-translate-x-1/2 lg:-translate-x-1/3 xl:-translate-x-1/3 md:-translate-y-1/4 lg:translate-y-1/3 overflow-hidden hidden sm:block shadow-md shadow-black">
                        <Image
                            src={silhouette}
                            fill
                            alt="streets"
                            className="object-cover"
                            placeholder="blur"
                        />
                    </div>
            </div>

        </div>
    )
}

const CTA = () => {
    const snap = useSnapshot(base)

    return (
        <div className="flex flex-col justify-center items-start">
            <Link href={"/posts"}>
                <motion.button animate={{color: snap.darkmode ? '#fff' : "#011222"}} type="button" className="bg-primary text-sm h-16 w-36 rounded-2xl md:rounded-3xl lg:rounded-3xl font-mont font-bold">
                        Read Posts
                </motion.button>
            </Link>
        </div>
    )
}
    
const MorphCard = () => {
    return (
       <div className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl">
        <div className="relative h-full w-full">
            <Image
                src={silhouette}
                fill
                alt="streets"
                className="object-cover"
                placeholder="blur"
            />
        </div>
       </div>
    )
}

const Objectives = () => {
    const snap = useSnapshot(base)

    const objectives = [
        {
            objective: "environment",
            text: "Afforestation, reforestation, pollution, and sanitation issues"
        },
        {
            objective: "society",
            text: "Natural disasters, corruption, educational issues"
        },
        {
            objective: "culture",
            text: "COVID-19, cholera, and HIV/AIDS."
        },
    ]
    return (
        <div className="flex flex-row justify-start items-center w-full mt-28 xl:mt-0">
            {objectives.map((objective, i) => (
                <div key={i} className="h-full w-full flex flex-row justify-start items-start">
                    <div className="h-full w-3 flex flex-col justify-start items-center">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <div className="h-[calc(100%-8px)] w-[2px] bg-gray-500"></div>
                    </div>
                    <div className="h-full w-auto flex flex-col justify-start items-start ml-2 gap-1">
                        <p className="text-accent font-mont text-lg sm:text-xl [1280px]:text-2xl font-semibold [1280px]:font-extrabold 2xl:text-3xl">{objective.objective}</p>
                        <motion.p animate={{color: snap.darkmode ? '#fff' : "#011222",}} className="font-mont text-xs sm:text-sm 2xl:text-base font-medium">{objective.text}</motion.p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const SomeSVG = () => {
    return (
        <div className="col-span-1 row-span-2 rounded-3xl relative overflow-hidden">
            {/* <div className="h-full w-full flex flex-col justify-center items-center relative">
                <div className="absolute h-full w-full flex flex-col justify-center items-center z-0">
                    <Image
                        src={blurbob}
                        fill
                        alt="blur svg"
                        className="object-cover"
                    />
                </div>
                <p className="text-white text-xs font-mont font-bold text-center relative z-0">REGISTERED TRUSTEES OF THE ENVIRONMENT, SOCIETY & CULTURE (ESC)</p>
            </div> */}
        </div>
    )
}

const Contacts = () => {
    return (
        <div className="col-span-2 row-span-1">
            {/* <div className="h-full w-full flex flex-col justify-center items-center gap-2">
                <p className="text-xs  text-white font-bold text-center font-mont flex flex-row gap-1 justify-center items-center">
                    <span>
                        <svg className="h-6 w-6 text-red-500"
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                        </svg>
                    </span>Plot No 228, Jacaranda Avenue, Mandala, Blantyre, Malawi.</p>
                <p className="text-xs  text-white font-bold text-center font-mont flex flex-row justify-center items-center gap-1">
                    <span>
                        <svg
                            className="h-6 w-6 text-primary"
                            data-slot="icon"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                        </svg>
                    </span>P.O Box 333, Blantyre, Malawi.</p>
            </div> */}
        </div>
    )
}