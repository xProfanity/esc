import { PawapayForm } from "@/components";
import { fundingText } from "@/constants";
import { Text } from "@radix-ui/themes";

export default function Funding() {
  return (
    <>
      <div className="h-[60vh] max-h-[924px] container mx-auto flex flex-col gap-16 md:gap-0 md:flex-row justify-center items-center  md:pb-0 mt-36 md:mt-0">
        <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
          <div className="w-full h-full relative flex flex-col items-center justify-center">
            <Text className="text-center font-bold text-3xl md:text-6xl md:font-extrabold font-mont">
              Empower Change, Transform Lives
            </Text>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center relative">
          <div className="h-auto w-96 flex flex-col justify-center items-center backdrop-blur-sm">
          <Text className="text-center font-bold font-mont">
              {fundingText}
            </Text>
          </div>
        </div>
      </div>

      <div className="h-auto max-h-[924px] container mx-auto flex flex-col gap-16 md:gap-0 md:flex-row justify-center items-center pb-20 md:pb-20">
        <div className="w-full h-auto flex flex-col relative z-10">
          <div className="w-full px-4 h-auto relative flex flex-col items-start justify-center">
            <PawapayForm />
          </div>
        </div>
      </div>
    </>
  )
}
