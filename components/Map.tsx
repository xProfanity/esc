"use client"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"


export default function Map() {

    const {isLoaded, loadError} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_FREE as string
    })

    const center = {
        lat: -15.790919,
        lng: 35.011443
    }

  return (
    <section className="h-screen w-full">
        <div className="h-[90%] container mx-auto flex flex-row items-center justify-center">
            <div className="h-full w-full flex flex-col justify-start items-start">
                <p className="">Contact Us</p>
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
