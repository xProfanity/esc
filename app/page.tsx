import { AfterHero, CoreValues, Hero, Missions } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <AfterHero />
      <Missions />
      <CoreValues />
      <section className="h-screen w-full"></section>
    </>
  )
}
