import Image from 'next/image'
import React from 'react'
import image from "../../media/marginalia-done.svg"

function Hero() {
    return (
        <div className="min-h-[420px] bg-[#FF8482] padding grid grid-cols-1 lg:grid-cols-2 gap-4 py-5">
            <div className="space-y-4 self-center lg:-mt-28">
                <p className="font-logo text-6xl text-white lg:text-7xl">Contact</p>
                <p className="font-semibold text-white text-xl">Te aliquam noluisse his. Et vel epicuri detracto indoctum, et fierent pericula vim, veniam.</p>
            </div>
            <Image src={image} objectFit="contain" />
        </div>
    )
}

export default Hero