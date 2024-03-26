"use client";
import { pawapay, stripe } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FundingForm() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  const user = firstname === "" && lastname === "" ? 'anon' : `${firstname} ${lastname}`

  const handlePawapayRequest = () => {}
  const handleStripeRequest = () => {}
  
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200 font-mont">
        Funding Form
      </h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300 font-mont">
        Fill in the form to proceed to funding. Leave blank if you want to be anonymous
      </p>

      <div className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" value={firstname} onChange={({target}) => setFirstname(target.value)} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" value={lastname} onChange={({target}) => setLastname(target.value)} />
          </LabelInputContainer>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
            <p className="text-sm max-w-sm text-neutral-300 font-mont">
                choose a payment gateway
            </p>
          <Link href={`/funding/pawapay?user=${user.toLowerCase().replaceAll(' ', '_')}`}>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <Image
                  src={pawapay}
                  height={50}
                  width={100}
                  alt="pawapay"
                  className="object-cover"
              />

              <BottomGradient />
            </button>
          </Link>
    
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={handleStripeRequest}
          >
            <Image
                src={stripe}
                height={50}
                width={50}
                alt="stripe"
                className="object-cover"
            />

            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
