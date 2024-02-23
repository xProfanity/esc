import { integrity, logo, professionalism, quality, transparency } from "@/assets";
import Image from "next/image";

export default function CoreValues() {
  return (
    <section className="h-screen w-full">
        <div className="h-full container mx-auto flex flex-col justify-start items-center">
            <div className="relative h-32 w-48">
                <Image
                    src={logo}
                    fill
                    alt="logo"
                    className="object-cover"
                />
            </div>

            <div className="mt-5">
                <p className="text-6xl text-white font-bold font-mont">Our Core Values.</p>
            </div>

            <div className="w-full flex flex-row justify-around items-center mt-20">
                <div className="h-44 w-44 flex flex-col justify-center items-center bg-primary rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={quality}
                            fill
                            alt="quality"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="font-bold font-mont text-white text-lg">Quality</p>
                </div>
                <div className="h-44 w-44 flex flex-col justify-center items-center bg-primary rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={integrity}
                            fill
                            alt="integrity"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="font-bold font-mont text-white text-lg">Integrity</p>
                </div>
                <div className="h-44 w-44 flex flex-col justify-center items-center bg-primary rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={transparency}
                            fill
                            alt="transparency"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="font-bold font-mont text-white text-lg">Transparency</p>
                </div>
                <div className="h-44 w-44 flex flex-col justify-center items-center bg-primary rounded-3xl">
                    <div className="relative h-24 w-24">
                        <Image
                            src={professionalism}
                            fill
                            alt="professionalism"
                            className="object-contain grayscale"
                        />
                    </div>
                    <p className="font-bold font-mont text-white text-lg">Professionalism</p>
                </div>
            </div>
        </div>
    </section>

  )
}
