"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Amounts from "./amounts";
import { BottomGradient } from "./funding-form";

interface AmountsObject {
  disableOther: boolean;
  amount: number;
}

export default function PawapayForm() {

  const [formValues, setFormValues] = useState(
    {
      fullname: '',
      email: '',
      company: '',
    }
  )

  const [amountValue, setAmountValue] = useState<AmountsObject>({disableOther: true, amount: 500})

    const handleValueChange = (e: String) => {
        if(e === "other") {
            return setAmountValue({disableOther: false, amount: 100})
        }

        setAmountValue({disableOther: true, amount: Number(e)})
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const load = {
      fullname: formValues.fullname,
      email: formValues.email,
      company: formValues.company,
      amount: amountValue.amount
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(load)
    }

    const response = await fetch("api/funding/pawapay", options)

    const result = await response.json()

    console.log("Form submitted", result.message);
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
            <Input id="fullname" placeholder="John Doe" type="text" value={formValues.fullname} onChange={({target}) => setFormValues({...formValues, fullname: target.value})} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Your email</Label>
            <Input id="email" placeholder="example@example.com" type="email" value={formValues.email} onChange={({target}) => setFormValues({...formValues, email: target.value})} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="amount">Donation amount</Label>
          <Amounts amountValue={amountValue} setAmountValue={setAmountValue} handleValueChange={handleValueChange} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Company name (if applicable)</Label>
          <Input id="company" placeholder="Company name" type="text" value={formValues.company} onChange={({target}) => setFormValues({...formValues, company: target.value})} />
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
