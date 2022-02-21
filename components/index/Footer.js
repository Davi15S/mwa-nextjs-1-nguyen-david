import Image from 'next/image'
import React from 'react'
import facebook from "../../media/facebook.svg"
import instagram from "../../media/instagram.svg"
import twitter from "../../media/twitter.svg"

function Footer() {
    return (
        <div className='min-h-[432px] padding bg-[#BE6361] py-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20'>
                <div className='space-y-4'>
                    <p className='font-logo text-white text-4xl'>LOGO</p>
                    <p className='font-semibold text-white'>Sit alii tantas viderer no. An mel nostrum appareat. Ad consul facilis est. Vix habeo scaevola percipitur ne, qui noster abhorreant ne.</p>
                    <div className='flex gap-x-4'>
                        <div className='cursor-pointer transition-all hover:scale-110 duration-200 w-[30px] flex items-center justify-center'><Image src={facebook} objectFit="contain" /></div>
                        <div className='cursor-pointer transition-all hover:scale-110 duration-200 w-[30px] flex items-center justify-center'><Image src={twitter} objectFit="contain" /></div>
                        <div className='cursor-pointer transition-all hover:scale-110 duration-200 w-[30px] flex items-center justify-center'><Image src={instagram} objectFit="contain" /></div>
                    </div>
                </div>
                <div className='grid grid-cols-1 mt-20 lg:mt-0 md:grid-cols-3'>
                    <FooterItem h1="Habeo" txt1="Scaevola" txt2="Aliquam" txt3="Noluisse" txt4="Epicuri" txt5="Detracto"/>
                    <FooterItem h1="Indoctum" txt1="Fierent" txt2="Pericula" txt3="Veniam" txt4="Epicuri" txt5="Mutat"/>
                    <FooterItem h1="Quaestio" txt1="Erroribus" txt2="Modus" txt3="Volumus" txt4="Abhorreant" txt5="Mentitum"/>
                </div>
            </div>
        </div>
    )
}

function FooterItem({h1, txt1, txt2, txt3, txt4, txt5}){
    return(
        <div className='mt-10 space-y-4 lg:mt-0'>
            <div>
                <p className='font-basic text-white'>{h1}</p>
            </div>
            <div className='font-semibold space-y-1'>
                <p className='cursor-pointer text-white opacity-50 hover:opacity-100 duration-200 transition-all'>{txt1}</p>
                <p className='cursor-pointer text-white opacity-50 hover:opacity-100 duration-200 transition-all'>{txt2}</p>
                <p className='cursor-pointer text-white opacity-50 hover:opacity-100 duration-200 transition-all'>{txt3}</p>
                <p className='cursor-pointer text-white opacity-50 hover:opacity-100 duration-200 transition-all'>{txt4}</p>
                <p className='cursor-pointer text-white opacity-50 hover:opacity-100 duration-200 transition-all'>{txt5}</p>
            </div>
        </div>
    )
}

export default Footer