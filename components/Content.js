import React from 'react'
import image from "../media/marginalia-unsubscribed.svg"
import Image from 'next/image'

function Content() {
    return (
        <div className='min-h-[768px] bg-[#FFF2DD] px-[14px] xl:px-[135px] md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20'>
            <Image src={image} objectFit="contain" />
            <div className="space-y-4 self-center mb-10">
                <p className='text-[#BE6361] text-xl font-basic'>Dico nullam</p>
                <p className='font-logo text-4xl xl:text-6xl'>Vim graeco principes</p>
                <p className='text-xl'>Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no ubique persecuti, at sit iusto aliquam interpretaris.</p>
                <button className='text-white bg-[#BE6361] font-basic py-3 px-14 rounded-md'>Explore</button>
            </div>
        </div>
    )
}

export default Content