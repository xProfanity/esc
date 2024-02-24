import { missions } from "@/constants";
import Image, { StaticImageData } from "next/image";

interface Props {
    mission: string;
    classes: string;
    image: StaticImageData;
    header: string | null;
    number: number
}

export default function Missions() {
  return (
    <section className="h-screen w-full py-12">
        <div className="container h-full mx-auto grid grid-cols-12 grid-rows-12 gap-4">
            {missions.map((mission, i) => (
                <MissionPanel
                    header={mission.header}
                    mission={mission.mission}
                    classes={mission.classes}
                    image={mission.image}
                    number={i+1}
                    key={i}
                />
            ))}
        </div>
    </section>
        
  )
}

const MissionPanel = ({mission, classes, image, header, number}: Props) => {
    return (
        <div className={`${header ? 'col-span-6 row-span-12' : 'col-span-6 row-span-6'} bg-gradient-to-br to-primary via-[#55cf55] from-[#7ed97e] rounded-3xl relative overflow-hidden`}>
            {header && (
                <div className="h-32 ml-5 flex flex-col justify-center items-start mt-10">
                    <p className="text-6xl font-extrabold text-[#0c0c0c] font-mont">{header}</p>
                </div>
            )}

            <div className={`${header ? 'ml-5 flex flex-row justify-start items-center gap-2' : `absolute w-1/2 h-full top-2 flex flex-col gap-2 ${number % 2 === 0 ? '-right-2' : 'left-2'}`}`}>
                <span className="h-16 w-16 bg-white text-[#0c0c0c] font-bold font-mont rounded-full flex flex-col justify-center items-center">{number}</span>
                <p className={`${header ? '' : 'w-11/12'} font-semibold text-lg font-mont text-[#0c0c0c]`}>{mission}</p>
            </div>

            <div className={`${!header ? `h-full w-1/2 ${number % 2 !== 0 ? 'right-0' : 'left-0'} bottom-0` : 'w-2/3 h-1/2 bottom-0 right-0'} absolute`}>
                <Image
                    src={image}
                    fill
                    alt="mission"
                    placeholder="blur"
                    className={`${header && 'rounded-tl-3xl'} object-cover`}
                />
            </div>
        </div>
    )
}