import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Input } from "../ui/input";

interface amountsObject {
    disableOther: boolean;
    amount: number;
}

export default function Amounts() {
    const [amountValue, setAmountValue] = useState<amountsObject>({disableOther: true, amount: 500})

    const handleValueChange = (e: String) => {
        if(e === "other") {
            return setAmountValue({disableOther: false, amount: 100})
        }

        setAmountValue({disableOther: true, amount: Number(e)})
    }

  return (
    <RadioGroup onValueChange={handleValueChange} defaultValue="500" orientation="horizontal" className="flex flex-col md:flex-row gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="500" id="r1" />
        <Label htmlFor="r1">MWK500</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="5000" id="r2" />
        <Label htmlFor="r2">MWK5000</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="10000" id="r3" />
        <Label htmlFor="r3">MWK10,000</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="other" id="r4" />
        <Label htmlFor="r4">Other</Label>
        <Input type="number" step={100} defaultValue={amountValue.amount} minLength={0} value={amountValue.amount} disabled={amountValue.disableOther} onChange={({target}) => setAmountValue({amount: Number(target.value), disableOther: false})} />
      </div>
    </RadioGroup>
  )
}
