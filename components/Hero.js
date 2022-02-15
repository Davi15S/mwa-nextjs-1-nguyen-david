import React from 'react'
import hero from "../media/marginalia-productive-work.svg"
import Image from "next/image"

function Hero() {
    return (
        <div className='bg-[#ff8482] relative px-[14px] grid grid-cols-1 justify-items-center space-y-2 lg:space-y-0 lg:grid-cols-2 lg:px-[135px] lg:space-x-14 xl:py-[5rem]'>
            <div className='space-y-10 lg:self-center'>
                <div className="font-basic text-white text-xl">
                    Delectus instructior
                </div>
                <div className="font-logo text-white text-5xl xl:text-6xl 2xl:text-8xl">
                    Vide legimus consectetuer
                </div>
                <div>
                    <form className='space-y-5 flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10'>
                        <input className='w-full p-4 font-basic rounded-sm h-12 border-none outline-none self-center lg:max-w-[30rem]' type="email" placeholder="Email" />
                        <button className='font-basic py-3 px-14 border-black border-2 bg-white hover:bg-opacity-90 transition-all duration-200 max-w-[13rem]' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <Image src={hero} width={644} height={659} objectFit="contain"/>
            </div>
        </div>
    )
}

export default Hero