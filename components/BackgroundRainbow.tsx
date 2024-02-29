import { rainbow } from '@/assets'
import Image from 'next/image'

export default function BackgroundRainbow() {
  return (
    <div className="absolute z-0 h-full w-full">
        <Image
            src={rainbow}
            fill
            alt="rainbow"
            className="object-contain"
        />
    </div>
  )
}
