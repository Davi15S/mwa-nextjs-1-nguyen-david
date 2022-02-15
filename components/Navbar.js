import Head from 'next/head'
import React from 'react'
import {MenuAlt1Icon} from "@heroicons/react/solid"

function Navbar() {
    return (
        <div>
            <Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
                </style>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');
                </style>
            </Head>
            <div className="bg-[#ff8482] text-white">
                <div className="font-normal px-[14px] lg:px-[135px] py-[16px] flex items-center justify-between">
                    <div className="font-logo cursor-pointer text-[40px]">LOGO</div>
                    <div className="items-center hidden sm:flex space-x-5 font-basic cursor-pointer">
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                    <div className="hidden sm:flex font-basic py-[13px] px-[56.5px] border-white border-opacity-25 border-[1px] rounded-md hover:bg-white hover:bg-opacity-20 transition-all duration-200 cursor-pointer">
                        Sign in
                    </div>
                </div>
                <div>
                    <MenuAlt1Icon className="h-10 absolute right-4 top-[27px] sm:hidden"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar