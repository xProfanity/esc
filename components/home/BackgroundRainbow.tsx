import { rainbow } from '@/assets'
import Image from 'next/image'

export default function BackgroundRainbow({fit}: {fit?: true | boolean}) {
  return (
    <div className="absolute z-0 h-full w-full">
        <Image
            src={rainbow}
            fill
            alt="rainbow"
            className={`${fit ? 'object-cover' : 'object-contain'}`}
        />
    </div>
  )
}
