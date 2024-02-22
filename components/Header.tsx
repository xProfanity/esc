import { logo } from "@/assets";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-50 h-20 w-full flex flex-col justify-center items-center backdrop-blur-xl shadow-lg shadow-black">
        <nav className="h-full w-11/12 flex flex-row justify-between items-center">
            <div className="relative h-20 w-28">
                <Image
                    src={logo}
                    fill
                    alt="logo"
                    className="object-contain"
                />
            </div>

            <div className="w-3/5 h-full flex flex-row justify-between items-center">
                <ul className="text-white flex flex-row justify-around items-center w-full">
                    <li>Videos</li>
                    <li>Organization</li>
                    <li>Goals</li>
                    <li>Funding</li>
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <button className="text-white h-10 w-32 border-2 border-primary rounded-full">CTA</button>
                </div>
            </div>
        </nav>
    </header>
  )
}
