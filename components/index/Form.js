import Image from 'next/image'
import React from 'react'
import image from "../../media/marginalia-waiting.svg"
import Button from './Button'

function Form() {
  return (
    <div className='min-h-[768px] padding py-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10'>
        <div className='space-y-4 self-center'>
            <p className="redH2">Percipit mea</p>
            <p className='H1'>Suas semper</p>
            <p className='font-semibold'>Deseruisse definitionem his et, an has veri integre abhorreant, nam alii epicurei et.</p>
            <form className='flex flex-col gap-4'>
                <input className='border-[1px] outline-none font-semibold border-[#DADADA] px-4 py-3 rounded-md max-w-[470px]' type="email" placeholder="Email"/>
                <textarea className='border-[1px] outline-none font-semibold border-[#DADADA] px-4 py-3 rounded-md resize-none max-h-[96px] max-w-[470px]' cols="40" rows="5" placeholder="Message" />
                <Button text="Submit" style="text-white bg-[#BE6361] hover:bg-opacity-90 duration-200 transition-all"/>
            </form>
        </div>
        <Image src={image} objectFit="contain" />
    </div>
  )
}

export default Form