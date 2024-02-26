import { AfterHero, CoreValues, Hero, HorizontalScroller, Missions } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <AfterHero />
      <Missions />
      <CoreValues />
      <HorizontalScroller />
      <section className="h-screen w-full"></section>
    </>
  )
}
