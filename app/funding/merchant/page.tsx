"use client"

import { BASEURL } from '@/constants';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface Query {
    deposit: string;
}

export default function page() {

    const query = useSearchParams()

    const depositId = query.get('depositId')

    useEffect(() => {
        const getDepositIdDetails = async () => {
            try {
                const res = await fetch(`${BASEURL}/deposits/${depositId}`, {method: 'GET'})
                
                const response = await res.json()

                console.log('response', response)
            } catch (error) {
                console.log('error', error)
            }
        }

        getDepositIdDetails()
    }, [])

  return (
    <div>page</div>
  )
}
