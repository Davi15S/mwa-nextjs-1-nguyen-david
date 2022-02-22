import Image from 'next/image'
import React from 'react'
import mobile from "../../media/device-mobile.svg"
import mail from "../../media/mail.svg"
import Button from '../index/Button'
import map from "../../media/locationMap.svg"
import location from "../../media/location.svg"

function Content() {
    return (
        <div className='grid grid-cols-1 py-4 lg:py-16 padding gap-y-16 lg:grid-cols-2 justify-items-center gap-x-10'>
            <div className='space-y-6'>
                <div className='grid grid-cols-1 justify-items-center gap-4 xl:grid-cols-2'>
                    <ContactItem img={mobile} h1="Call us" text="+1 234 567 89 00" />
                    <ContactItem img={mail} h1="Write us" text="info@gmail.com" />
                </div>
                <p className='font-semibold text-xl pt-5'>Cum ea debitis maluisset gubergren, at mea essent splendide. Vix dicam dolore cu. Mel erat timeam scriptorem an. Sit alii tantas viderer no. An mel nostrum appareat.</p>
                <p className='opacity-50'>Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in dicant eligendi evertitur. Ad falli aliquid menandri his. Usu vocent copiosae ut. No nihil munere eum.</p>
                <form className='flex flex-col gap-y-4 pt-5'>
                    <div className='flex flex-col gap-y-4 xl:flex-row xl:justify-between gap-x-8'>
                        <input className='p-4 border flex-grow border-[#DADADA] rounded-md outline-none font-semibold text-black text-opacity-50' type="text" placeholder='Your name' />
                        <input className='p-4 border flex-grow border-[#DADADA] rounded-md outline-none font-semibold text-black text-opacity-50' type="email" placeholder='Your email' />
                    </div>
                    <textarea className='border-[1px] outline-none font-semibold border-[#DADADA] px-4 py-3 text-black text-opacity-50 rounded-md resize-none max-h-[144px]' cols="40" rows="5" placeholder="Message" />
                    <Button text="Submit" style="text-white bg-[#BE6361] hover:bg-opacity-90 duration-200 transition-all" />
                </form>
            </div>
            <div className='self-center relative cursor-pointer'>
                <Image src={map} objectFit="contain" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Image src={location} objectFit="contain" />
                </div>
            </div>
        </div>
    )
}

function ContactItem({ img, h1, text }) {
    return (
        <div className='h-[112px] max-w-[370px] bg-white w-full flex rounded-md items-center p-8 gap-x-8 cursor-pointer hover:scale-105 transition-all duration-200 border border-[#E5E5E5] shadow-lg'>
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

export default Content