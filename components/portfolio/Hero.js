import React from 'react'
import Image from "next/image"
import image from "../../media/marginalia-shipping.svg"

function Hero() {
  return (
    <div className="min-h-[420px] bg-[#FF8482] padding grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
        <div className="space-y-4 self-center lg:-mt-28">
            <p className="font-logo text-6xl text-white lg:text-7xl">Portfolio</p>
            <p className="font-semibold text-white text-xl">Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea nam, at posse dicta est.</p>
        </div>
        <Image src={image} objectFit="contain" />
    </div>
  )
}

export default Hero