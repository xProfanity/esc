"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Amounts from "./amounts";
import { BottomGradient } from "./funding-form";

export default function PawapayForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Funding Form
      </h2>
      <p className="text-sm max-w-xl mt-2 text-neutral-300">
        Every donation, no matter big or small, makes a significance difference to our funding. Thank you for doing your part to help.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname">Your name</Label>
            <Input id="fullname" placeholder="John Doe" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Your email</Label>
            <Input id="email" placeholder="example@example.com" type="email" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="amount">Donation amount</Label>
          <Amounts />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Company name (if applicable)</Label>
          <Input id="company" placeholder="Company name" type="text" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Proceed to deposit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

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
