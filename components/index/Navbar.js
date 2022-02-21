import React from 'react'
import {MenuAlt1Icon} from "@heroicons/react/outline"
import Link from "next/link"

function Navbar() {
    return (
        <div>
            <div className='text-white bg-[#FF8482]'>
                <div className="font-normal px-[14px] xl:px-[135px] md:px-20 py-[16px] flex items-center justify-between">
                    <Link href="/">
                        <a className="font-logo cursor-pointer text-[40px]">LOGO</a>
                    </Link>
                    <div className="items-center hidden sm:flex space-x-5 font-basic cursor-pointer">
                        <Link href="/portfolio">
                            <a className='navbar-link'>Portfolio</a>
                        </Link>
                        <Link href="/contact">
                            <a className='navbar-link'>Contact</a>
                        </Link>
                    </div>
                    <div className="hidden sm:flex font-basic py-[13px] px-[56.5px] border-white border-opacity-25 hover:border-opacity-100 border-[1px] rounded-md hover:bg-white hover:bg-opacity-20 transition-all duration-200 cursor-pointer">
                        Sign in
                    </div>
                </div>
                <div>
                    <MenuAlt1Icon className="h-10 cursor-pointer absolute right-4 top-[27px] sm:hidden" />
                </div>
            </div>
        </div>
    )
}

export default Navbar