import React from 'react'
import image from "../../media/marginalia-unsubscribed.svg"
import Image from 'next/image'
import Button from './Button'

function Content() {
    return (
        <div className='min-h-[768px] bg-[#FFF2DD] padding grid grid-cols-1 lg:grid-cols-2 gap-x-20'>
            <Image src={image} objectFit="contain" />
            <div className="space-y-4 self-center mb-10 lg:space-y-8">
                <p className='redH2'>Dico nullam</p>
                <p className='H1'>Vim graeco principes</p>
                <p className='text-xl'>Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no ubique persecuti, at sit iusto aliquam interpretaris.</p>
                <Button text="Explore" style="text-white bg-[#BE6361] hover:bg-opacity-90 duration-200 transition-all"/>
            </div>
        </div>
    )
}

export default Content