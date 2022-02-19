import React from 'react'
import Image from 'next/image'
import checkmark from "../media/checkmark.svg"
import Button from './Button'

function Subscription() {
    return (
        <div className='min-h-[768px] padding py-16 lg:py-20 bg-[#FFF2DD] space-y-10'>
            <p className='redH2 text-center'>Mazim nemore</p>
            <p className='H1 text-center'>Nullam ornatus</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-4'>
                <Card bg="bg-white" h1="Maiestatis" price="9" />
                <Card bg="bg-white" h1="Maiestatis" price="24" />
                <Card bg="bg-white" h1="Maiestatis" price="99" />
            </div>
            <p className='text-center font-semibold text-gray-400 max-w-[400px] mx-auto'>Diam facilisi insolens per cu, eos malorum voluptaria esse concludaturque facete quaeque consequat </p>
        </div>
    )
}

function Card({ bg, h1, price}) {
    return (
        <div className={`max-w-[370px] h-[416px] w-full m-auto relative ${bg} flex flex-col items-center`}>
            <p className="redH2 absolute left-8 pt-11">{h1}</p>
            <div className='absolute right-8 H1 top-10 flex gap-x-2'>
                <p className="text-4xl">$</p>
                <p className='text-7xl'>{price}</p>
            </div>
            <div className='pt-16 absolute left-8 top-14'>
                <CardListItem text="An mel everti invenire" />
                <CardListItem text="Intellegam legendos " />
                <CardListItem text="Consequuntur eu sit" />
                <CardListItem text="Solet nostrum" />
                <CardListItem text="Consectetuer sea" />
            </div>
            <div className='absolute bottom-14'>
                <Button text="Buy" style="text-[#BE6361] border-2 border-opacity-30 hover:border-opacity-100 duration-200 transition-all hover:bg-[#BE6361] hover:bg-opacity-5 border-[#BE6361]" />
            </div>
        </div>
    )
}

function CardListItem({ text }) {
    return (
        <div className='flex gap-x-4 my-2'>
            <Image src={checkmark} objectFit="contain" />
            <p className='font-semibold'>{text}</p>
        </div>
    )
}

export default Subscription