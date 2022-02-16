import React from 'react'
import hero from "../media/marginalia-productive-work.svg"
import Image from 'next/image'

function Hero() {
    return (
        <div className="h-[676px] bg-[#FF8482] grid grid-cols-1 xl:grid-cols-2 px-[14px] xl:px-[135px] md:px-20 gap-x-10">
            <div className='space-y-4 self-center'>
                <p className='text-white font-basic'>Delectus instructior</p>
                <p className='text-white font-logo text-6xl xl:text-7xl 2xl:text-8xl'>Vide legimus consectetuer</p>
                <form className='flex flex-col gap-y-4 md:flex-row md:items-center gap-x-10'>
                    <input className='font-basic h-12 p-4 flex-grow outline-none' type="email" placeholder="Email"/>
                    <button className='font-basic py-3 px-14 border-black rounded-md border-2 bg-white hover:bg-opacity-90 transition-all duration-200 max-w-[13rem]' type='submit'>Submit</button>
                </form>
            </div>
            <Image src={hero} objectFit="contain"/>
        </div>
    )
}

export default Hero