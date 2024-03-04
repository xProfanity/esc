"use client"

import { charts, leaf, masks } from "@/assets";
import { base } from "@/context/store";
import Image, { StaticImageData } from "next/image";
import { useSnapshot } from "valtio";

interface Props {
    mission: string;
    classes: string;
    image: StaticImageData;
    header: string | null;
    number: number
}

export default function Missions() {
    const snap = useSnapshot(base)
  return (
    <section className={`h-screen w-full py-12 bg-pattern ${!snap.darkmode && 'hero-bg'}`}>
        <div className="container h-full mx-auto flex flex-col justify-center items-center">
            <div className="flex">
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-start gap-10 md:gap-4 w-fit">
                <div className="h-full w-full">
                    <div className={`h-[390px] sm:h-[400px] md:h-[450px] lg:h-[400px] xl:h-[450px] w-[440px] sm:w-[450px] md:w-[600px] lg:w-[450px] xl:w-[600px] bg-transparent backdrop-blur-3xl rounded-3xl relative overflow-hidden shadow-xl`}>
                        <div className="h-32 ml-5 flex flex-col justify-center items-start mt-10">
                            <p className="text-5xl xl:text-6xl font-extrabold sm:text-amber-500 md:text-orange-500 lg:text-accent xl:text-[#e3e3e7] font-mont">Our Missions</p>
                        </div>

                        <div className={`ml-5 flex flex-row justify-start items-center gap-2`}>
                            <span className="h-16 w-16 bg-accent text-white font-bold font-mont rounded-full flex flex-col justify-center items-center">1</span>
                            <p className={`font-semibold text-lg font-mont text-[#e3e3e7]`}>Strive towards sustenance in Climate Change & Environment.</p>
                        </div>

                        <div className={`w-3/5 xl:w-2/3 h-[45%] xl:h-1/2 bottom-0 right-0 absolute`}>
                            <Image
                                src={leaf}
                                fill
                                alt="mission"
                                placeholder="blur"
                                className={`rounded-tl-3xl object-cover`}
                            />
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex flex-col justify-between gap-10 md:gap-2">
                    <div className={`w-[450px] md:w-[600px] lg:w-[450px] xl:w-[600px] h-[195px] md:h-[217px] lg:h-[195px] xl:h-[217px] bg-primary rounded-3xl relative overflow-hidden bg-transparent backdrop-blur-3xl shadow-xl`}>
                        <div className={`absolute w-1/2 h-full top-2 flex flex-col gap-2 left-2`}>
                            <span className="h-16 w-16 bg-accent text-white font-bold font-mont rounded-full flex flex-col justify-center items-center">2</span>
                            <p className={`w-11/12 font-semibold text-lg font-mont text-[#e3e3e7]`}>Counter Socio-Economic issues and Corruption.</p>
                        </div>

                        <div className={`h-full w-1/2 right-0 bottom-0 absolute`}>
                            <Image
                                src={charts}
                                fill
                                alt="mission"
                                placeholder="blur"
                                className={`object-cover`}
                            />
                        </div>
                    </div>

                    <div className={`w-[450px] md:w-[600px] lg:w-[450px] xl:w-[600px] h-[195px] md:h-[217px] lg:h-[195px] xl:h-[217px] bg-primary rounded-3xl relative overflow-hidden bg-transparent backdrop-blur-3xl shadow-xl`}>
                        <div className={`absolute w-1/2 h-full top-2 flex flex-col gap-2 -right-2`}>
                            <span className="h-16 w-16 bg-accent text-white font-bold font-mont rounded-full flex flex-col justify-center items-center">3</span>
                            <p className={`w-11/12 font-semibold text-lg font-mont text-[#e3e3e7]`}>Participate in fighting pandemics and disasters.</p>
                        </div>

                        <div className={`h-full w-1/2 left-0 bottom-0 absolute`}>
                            <Image
                                src={masks}
                                fill
                                alt="mission"
                                placeholder="blur"
                                className={`object-cover`}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
        
  )
}