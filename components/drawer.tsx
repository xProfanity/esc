"use client"

import { Button } from "@/components/ui/cnbutton"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Navlinks } from "@/constants"
import { Text } from "@radix-ui/themes"
import Link from "next/link"

export default function SheetDrawer() {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>
            <svg  className="h-10 w-10" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ESC.</SheetTitle>
          <SheetDescription>
            Empower Change, Transform Lives.
          </SheetDescription>
        </SheetHeader>
        
        <div className="h-[calc(100%-5rem)] w-full flex flex-col justify-start">
            {Navlinks.map((item, i) => (
                <Text key={i} className="capitalize h-10 py-5 hover:bg-[#011222] text-white font-bold font-mont">
                    <Link href={item.link}>
                        {item.name}
                    </Link>
                </Text>
            ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
