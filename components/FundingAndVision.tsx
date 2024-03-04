import { funding, huddle, vision } from "@/assets";
import Image from "next/image";

export default function FundingAndVision() {
  return (
    <section className="h-screen w-full mt-56">
      <div className="container h-[60rem] lg:h-[35rem] mx-auto flex flex-col lg:flex-row justify-between items-center gap-2 bg-primary rounded-3xl lg:-rotate-3">
        <div className="h-full w-full lg:rotate-3">
          <h1 className="mt-10 ml-6 text-4xl lg:text-5xl xl:text-6xl font-extrabold font-mont text-[#0c0c0c]">Vision & Funding</h1>
          <p className="mt-5 ml-6 font-semibold text-base md:text-lg lg:text-base xl:text-lg font-mont text-[#0c0c0c]">Explore Our Vision and Support Us. Learn How Your Contribution Can Make a Difference in Environmental Preservation, Social Justice, and Cultural Sustainability. Get Involved Today!</p>

          <div className="w-full flex flex-row justify-around items-center mt-10">
            <div className="flex flex-col w-full justify-evenly items-start gap-2 h-[15rem]">
              <div className="relative h-[80px] w-[120px] mx-auto">
                <Image
                  src={vision}
                  fill
                  alt="vision"
                  placeholder="blur"
                  className="object-contain"
                />
              </div>

              <p className="font-semibold w-4/5 mx-auto text-left xl:text-justify text-sm md:text-lg lg:text-sm xl:text-lg font-mont text-white">To be the organization of choice in Environment, Society, and Cultural issues contributing to national development.</p>
            </div>
            <div className="flex flex-col w-full justify-evenly items-start gap-2 h-[15rem]">
              <div className="relative h-[80px] w-[120px] mx-auto">
                <Image
                  src={funding}
                  fill
                  alt="vision"
                  placeholder="blur"
                  className="object-contain"
                />
              </div>

              <p className="font-semibold w-4/5 mx-auto text-left xl:text-justify text-sm md:text-lg lg:text-sm xl:text-lg font-mont text-white">Seeking funding from government, overseas donors, and interested organizations.</p>
            </div>
            
          </div>
        </div>

        <div className="h-[90%] w-full flex flex-col justify-center items-center lg:rotate-3">
          <div className="relative h-[400px] lg:h-[760px] w-[90%] md:w-[650px] lg:w-[400px]">
            <Image
              src={huddle}
              fill
              alt="desk"
              placeholder="blur"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
