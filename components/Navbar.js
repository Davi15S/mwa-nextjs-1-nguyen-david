import Head from 'next/head'
import React from 'react'

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
                    <div className="items-center hidden sm:flex space-x-5 font-navbar cursor-pointer">
                        <p>Portfolio</p>
                        <p>Contact</p>
                    </div>
                    <div className="hidden sm:flex font-navbar py-[13px] px-[56.5px] border-white border-[1px] rounded-md">
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar