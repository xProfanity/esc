import { BackgroundRainbow, FundingForm } from "@/components";
import { TextGenerateEffect } from "@/components/ui/text-generator-effect";
import { fundingText } from "@/constants";
import { Heading } from "@radix-ui/themes";

export default function Funding() {
  return (
    <div className="h-screen max-h-[924px] container mx-auto flex flex-col md:flex-row justify-center items-center">
      <BackgroundRainbow />

      <div className="w-full h-full flex flex-col justify-center items-center relative z-10">

        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <Heading size={"8"}>Empower Change, Transform Lives</Heading>
          <TextGenerateEffect words={fundingText} className="font-semibold text-xl font-mont w-2/3 text-center" />
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
