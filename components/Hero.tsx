"use client"

import { rainbow, silhouette, street } from "@/assets"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="h-screen w-full relative mt-5 z-10">
        <div className="absolute z-0 h-full w-full">
            <Image
                src={rainbow}
                fill
                alt="rainbow"
                className="object-cover"
            />
        </div>
        <div className="h-full w-full relative z-10 backdrop-blur-xl">
            <div className="h-full my-auto container mx-auto grid grid-cols-6 grid-rows-6 gap-1">
                <div className="col-span-6 row-span-1"></div>
                    <Objectives />
                    <HeroImage />
                    <Niche />
                    <SomeSVG />
                    <MorphCard />
                    <CTA />
                    <Contacts />
                <div className="col-span-6 row-span-1"></div>
            </div>
        </div>
    </section>
  )
}

const Niche = () => {
    return (
        <div className="col-span-3 row-span-2 flex flex-col justify-center items-center">
            <p className="text-5xl font-extrabold font-mont uppercase text-white">Empowering Communities for a Sustainable Future</p>
        </div>
    )
}

const HeroImage = () => {
    return (
        <div className="col-span-3 row-span-2 relative rounded-3xl z-10">
            <div className="relative h-full w-full">
                <Image
                    src={street}
                    fill
                    alt="streets"
                    className="object-cover rounded-3xl"
                    placeholder="blur"
                />
                <div className="absolute h-40 w-40 rounded-2xl bg-transparent backdrop-blur-lg flex flex-col justify-center items-center top-0 right-0 -translate-y-1/2 shadow-lg">
                    <p className="text-lg text-white font-bold font-mont">ESTO</p>
                    <p className="text-lg text-white font-bold font-mont">July 2017</p>
                </div>
            </div>

        </div>
    )
}

const CTA = () => {
    return (
        <div className="col-span-1 row-span-1 flex flex-col justify-center items-start">
            <button type="button" className="bg-primary text-lg h-16 w-44 rounded-full border-2 border-black text-white font-mont font-bold">
                Watch Video
            </button>
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
        <>
            {objectives.map((objective, i) => (
                <div className="col-span-1 row-span-1 h-full w-full flex flex-row justify-start items-start">
                    <div className="h-full w-3 flex flex-col justify-start items-center">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <div className="h-[calc(100%-8px)] w-[2px] bg-gray-500"></div>
                    </div>
                    <div className="h-full w-auto flex flex-col justify-start items-start ml-2 gap-1">
                        <p className="font-mont text-2xl text-white font-extrabold">{objective.objective}</p>
                        <p className="font-mont text-sm text-white font-light">{objective.text}</p>
                    </div>
                </div>
            ))}
        </>
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
                            stroke-width="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            ></path>
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                        </svg>
                    </span>Plot No 228, Jacaranda Avenue, Mandala, Blantyre, Malawi.</p>
                <p className="text-xs  text-white font-bold text-center font-mont flex flex-row justify-center items-center gap-1">
                    <span>
                        <svg
                            className="h-6 w-6 text-primary"
                            data-slot="icon"
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                        </svg>
                    </span>P.O Box 333, Blantyre, Malawi.</p>
            </div> */}
        </div>
    )
}