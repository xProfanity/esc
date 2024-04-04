import { charts, leaf, masks } from "@/assets";
import LayoutGrid from "@/components/ui/layout-grid";
import { Heading, Text } from "@radix-ui/themes";
import SvgLayer from "./svg-layer";

export default function About() {

  return (
    <div className="min-h-screen h-auto w-full relative">
      <SvgLayer />
      <div className="h-screen max-h-[720px] relative w-full flex flex-col justify-center items-center gap-10">
        <Heading size={"9"} className="font-mont text-primary">
          About us
        </Heading>

        <Text className="w-2/3 lg:w-1/2 font-mont" align={'center'}>
          Learn more about our organization's journey, mission, and commitment to environmental sustainability, social justice, and cultural preservation. Discover how we're making a difference and how you can join us in creating positive change for our world
        </Text>
      </div>

      <div className="h-screen max-h-max py-10 w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-5">
          <Heading size={"9"} className="font-mont">
            Our Mission
          </Heading>

          <Text className="font-mont text-center md:text-left">
          Our mission is to promote environmental sustainability, social justice, and cultural preservation. Through our concerted efforts, we aim to combat climate change, eradicate corruption, and tackle pandemics. We strive to empower communities, foster positive change, and create a brighter, healthier future for all. Join us in our journey towards a more equitable and sustainable world.
          </Text>
        </div>

        <div className="h-full w-full flex flex-col justify-center items-center relative">
          <MissionGrid />
        </div>
      </div>
    </div>
  )
}

const MissionGrid = () => {
  return (
    <div className="w-full h-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Environment</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Strive towards sustenance in Climate Change & Environment.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Society</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Counter Socio-Economic issues and Corruption.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Culture</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Engaging in proactive measures to combat the spread of pandemics and provide assistance during disasters.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-4 md:col-span-2",
    thumbnail: leaf,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-4 md:col-span-2",
    thumbnail: charts,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-4",
    thumbnail: masks,
  },
]