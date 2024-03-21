import { Input } from "@/components/ui/input";
import { Button, Heading } from "@radix-ui/themes";

export default function Funding() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-auto w-96 border border-accent rounded-lg flex flex-col justify-center items-start">
        <Heading className="font-mont text-whiteish">Fund us mulla lol</Heading>
        <Input />
        <Button>Hello 👋</Button>
      </div>
    </div>
  )
}
