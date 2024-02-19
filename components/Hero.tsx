"use client"

export default function Hero() {
  return (
    <section className="h-screen w-full relative">
        <div className="h-full my-auto container mx-auto grid grid-cols-6 grid-rows-6 gap-2">
            <div className="col-span-6 row-span-1"></div>
            <Objectives />
            <HeroImage />
            <Niche />
            <SomeSVG />
            <MorphCard />
            <CTA />
            <div className="col-span-6 row-span-1"></div>
        </div>
    </section>
  )
}

const Niche = () => {
    return (
        <div className="col-span-3 row-span-2 border">niche</div>
    )
}

const HeroImage = () => {
    return (
        <div className="col-span-3 row-span-2 border">hero image</div>
    )
}

const CTA = () => {
    return (
        <div className="col-span-2 row-span-1 border">cta</div>
    )
}
    
const MorphCard = () => {
    return (
       <div className="col-span-2 row-span-2 border">MorphCard</div>
    )
}

const Objectives = () => {
    return (
        <>
            {[...Array(3)].map((_, i) => (
                <div className="col-span-1 row-span-1 border">Objective {i+1}</div>
            ))}
        </>
    )
}

const SomeSVG = () => {
    return (
        <div className="col-span-1 row-span-2 border"></div>
    )
}