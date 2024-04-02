"use client"

import { DepositSlip } from '@/common';
import { BASEURL } from '@/constants';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Query {
    deposit: string;
}

export default function page() {

    const [depositSlipt, setDepositSlip] = useState<DepositSlip[] | null>()

    const query = useSearchParams()

    const depositId = query.get('depositId')
    const name = query.get('name')
    const email = query.get('email')
    const company = query.get('company')
    const amount = query.get('amount')

    useEffect(() => {
        const getDepositIdDetails = async () => {
            try {
                const res = await fetch(`${BASEURL}/deposits/${depositId}`, {method: 'GET'})
                
                const response =  await res.json() as DepositSlip[] | null

                setDepositSlip(response)
            } catch (error) {
                console.log('error', error)
            }
        }

        const registerTransaction = async () => {

            const options = {
                method: 'POST',
                body: JSON.stringify({
                    depositId, name, email, company, amount
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                const res = await fetch('/api/db', options)
                const response = await res.json()

                console.log('response', response)
            } catch (error) {
                console.log('error', error)
            }
        }

        getDepositIdDetails()

        if(depositSlipt?.[0].status === "COMPLETED") registerTransaction()

    }, [])

  return (
    <div>page</div>
  )
}
