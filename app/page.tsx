import { Contacts, CoreValues, FundingAndVision, Hero, Missions, Objectives } from "@/components";
import { FloatingNav } from "@/components/ui/header";
import { Navlinks } from "@/constants";

export default function Home() {
  return (
    <>
      <FloatingNav navItems={Navlinks} />
      <Hero />
      <Objectives />
      <Missions />
      <CoreValues />
      <FundingAndVision />
      <Contacts />
    </>
  )
}
