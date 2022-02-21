import React from 'react'
import map from "../../media/map.svg"
import mail from "../../media/mail.svg"
import mobile from "../../media/device-mobile.svg"
import Image from 'next/image'

function Contact() {
    return (
        <div className="min-h-[432px] padding bg-[#BE6361] py-28">
            <div className='space-y-10'>
                <div className='font-logo text-white text-4xl lg:text-6xl text-center'>Timeam scriptorem</div>
                <div className='grid grid-cols-1 justify-items-center gap-y-4 lg:grid-cols-3 gap-x-4'>
                    <ContactItem img={map} h1="Office" text="Mel erat timeam, 123 45-67" />
                    <ContactItem img={mobile} h1="Call us" text="+1 234 567 89 00" />
                    <ContactItem img={mail} h1="Write us" text="info@gmail.com" />
                </div>
            </div>
        </div>
    )
}

function ContactItem({ img, h1, text }) {
    return (
        <div className='h-[112px] max-w-[370px] bg-white w-full flex items-center p-8 gap-x-8 cursor-pointer hover:scale-110 transition-all duration-200'>
            <div className='flex items-center justify-center w-[50px]'>
                <Image src={img} objectFit="contain" />
            </div>
            <div>
                <p className='font-bold text-2xl'>{h1}</p>
                <p className='text-[#333333] text-opacity-50 font-semibold'>{text}</p>
            </div>
        </div>
    )
}

export default Contact