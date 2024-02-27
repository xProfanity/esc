import { logo } from "@/assets";
import { Navlinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 h-20 w-full flex flex-col justify-center items-center backdrop-blur-xl shadow-xl">
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
                <ul className="flex flex-row justify-around items-center w-full">
                    {Navlinks.map((item, i) => (
                        <li key={i} className="text-white capitalize">
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="w-2/5 flex flex-col justify-center items-center h-full">
                    <button className="text-white h-10 w-32 border-2 border-primary rounded-full">CTA</button>
                </div>
            </div>
        </nav>
    </header>
  )
}
