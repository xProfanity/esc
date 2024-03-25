import { BackgroundRainbow, FundingForm } from "@/components";
import { TextGenerateEffect } from "@/components/ui/text-generator-effect";
import { fundingText } from "@/constants";
import { Heading } from "@radix-ui/themes";

export default function Funding() {
  return (
    <div className="h-screen max-h-[924px] container mx-auto flex flex-col gap-16 md:gap-0 md:flex-row justify-center items-center pb-20 md:pb-0 mt-36 md:mt-0">
      <BackgroundRainbow />

      <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <Heading size={"8"} className="text-center">Empower Change, Transform Lives</Heading>
          <TextGenerateEffect words={fundingText} className="font-semibold text-lg md:text-xl font-mont w-2/3 text-center" />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center relative">
        <div className="h-auto w-96 border border-accent rounded-lg flex flex-col justify-center items-start backdrop-blur-sm">
          <FundingForm />
        </div>
      </div>
    </div>
  )
}
