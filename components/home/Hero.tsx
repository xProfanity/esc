"use client"

import Link from "next/link"
import { useState } from "react"
import BottomGradient from "../ui/bottom-gradient"
import Button from "../ui/button"
import { Input } from "../ui/input"

export default function Hero() {

  return (
    <section className="h-[120vh] max-h-[924px] w-full relative z-10">
        <div className="absolute h-full w-full lg:w-1/2 right-0 bg-vector bg-cover bg-no-repeat bg-center"></div>

        <div className="h-full w-full absolute block lg:hidden z-0 backdrop-brightness-50" />
        <div className="h-full w-full relative z-10">
            <div className="h-full flex flex-col justify-start items-start">
                <div className="lg:my-auto container mx-auto flex flex-col lg:flex-row justify-between item-center relative z-0 h-full w-full">
                        <div className="w-full h-full flex flex-col justify-start items-center sm:items-start gap-10 lg:justify-center mt-56 lg:-mt-10">
                            <Niche />
                            <CTA />
                        </div>
                        <div className="relative w-full h-full hidden sm:block">
                        </div>
                </div>
                <div className="flex w-full absolute -bottom-32 md:-bottom-28 lg:bottom-0 -z-10 lg:relative lg:z-10">
                    <div className="h-12 w-[120vw]  bg-accent flex flex-col justify-center items-center relative">
                        <p className="font-bold font-mont text-xl text-nowrap text-center">
                            ● The Registered trustees of Environment, Society & Culture (ESC) ● The Registered trustees of Environment, Society & Culture (ESC) ● The Registered trustees of Environment, Society & Culture (ESC) ● The Registered trustees of Environment, Society & Culture (ESC) ●
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

const Niche = () => {
    
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl sm:text-5xl font-extrabold font-mont uppercase text-whiteish lg:text-current text-center sm:text-left">Empowering Communities for a Sustainable Future</p>
            <p className="text-lg font-bold font-mont capitalize text-center text-whiteish lg:text-current sm:text-left w-full mt-10">Strengthening communities to face challenges head-on and thrive.</p>
        </div>
    )
}

const CTA = () => {

    const [email, setEmail] = useState("")

    function isValidEmail(email: string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const handleEmailSub = async () => {
        if(isValidEmail(email)) {
            const options = {
                method: 'POST',
                body: JSON.stringify({email: email.toLowerCase()}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                const res = await fetch('http://localhost:3000/api/newsletter/sub', options)

                const response = await res.json()

                console.log('response', response)
            } catch (error) {
                console.log('error', error)
            }

            return setEmail('email subbed')
        }

        return setEmail('invalid email damn')
    }

    return (
        <div className="flex flex-col justify-around text sm:justify-center items-center sm:items-start gap-5 w-full flex-1 sm:flex-none">
            <Link href={"/posts"}>
                <Button>
                    See Activities
                </Button>
            </Link>

            <div className="h-auto w-full flex flex-col sm:flex-row gap-2 relative justify-center sm:justify-start items-center">
                <Input type="email" value={email} onChange={({target}) => setEmail(target.value)} placeholder="sign up email for newsletter" className="w-[20rem] sm:w-[24rem] h-12" />
                <button
                    className="bg-gradient-to-br h-12 relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-1/2 sm:w-1/5 text-white rounded-md font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="button"
                    onClick={handleEmailSub}
                >
                    Sign up
                    <BottomGradient />
                </button>
            </div>
        </div>
    )
}