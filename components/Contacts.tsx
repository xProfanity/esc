"use client"
import { base } from "@/context/store"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { motion } from "framer-motion"
import { useSnapshot } from "valtio"


export default function Contacts() {

    const snap = useSnapshot(base)

    const {isLoaded, loadError} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_FREE as string
    })

    const center = {
        lat: -15.790919,
        lng: 35.011443
    }

  return (
    <section className="h-screen w-full mt-56">
        <div className="h-[50rem] lg:h-[35rem] container mx-auto flex flex-col lg:flex-row items-center justify-center">
            <div className="h-full w-full flex flex-col justify-center md:justify-start items-center md:items-start">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-primary font-mont">Contact Us</h1>
                <motion.p animate={{color: snap.darkmode ? '#ccc' : '#011222'}} className="mt-5 font-semibold text-base sm:text-lg font-mont w-2/3 text-center md:text-left">Have questions or want to get involved? Reach out to us! We're here to listen, assist, and collaborate.</motion.p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-10">
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
                        <motion.p animate={{color: snap.darkmode ? '#fff' : '#011222'}} className="font-mont font-bold text-center md:text-left text-base md:text-lg">Plot No 228, Jacaranda Avenue, Mandala, Blantyre, Malawi.</motion.p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-5">
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
                    <motion.p animate={{color: snap.darkmode ? '#fff' : '#011222'}} className="font-mont font-bold text-center md:text-left text-base md:text-lg">P.O Box 333, Blantyre, Malawi.</motion.p>
                </div>
            </div>

            {isLoaded && (
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerClassName="h-full w-full rounded-3xl border-2 border-primary"
                >
                    <Marker position={center} title="We are here" label={"WE ARE HERE"}></Marker>
                </GoogleMap>
            )}

            {loadError && (
                <p className="text-red-500 text-lg font-mont font-bold">Error loading map</p>
            )}
        </div>
    </section>
  )
}