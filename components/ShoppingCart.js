import Image from 'next/image'
import React from 'react'
import image from "../media/marginalia-online-shopping.svg"
import checkmark from "../media/checkmark.svg"

function ShoppingCart() {
    return (
        <div className='min-h-[768px] padding py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 space-x-10'>
            <Image src={image} objectFit="contain" />
            <div className='space-y-4 self-center'>
                <p className='redH2'>Ei vix quot </p>
                <p className='H1'>Suscipit natum</p>
                <div className='grid grid-cols-2'>
                    <div>
                        <ListItem text="Usu vitae" />
                        <ListItem text="Quidam officiis" />
                        <ListItem text="Vel tollit" />
                        <ListItem text="Nihil tantas" />
                    </div>
                    <div>
                        <ListItem text="Decore ut" />
                        <ListItem text="Similique sea ei" />
                        <ListItem text="Indoctum" />
                        <ListItem text="Platonem eos" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ListItem({ text }) {
    return (
        <div className='flex gap-x-4 my-4'>
            <Image src={checkmark} objectFit="contain" />
            <p className='font-semibold'>{text}</p>
        </div>
    )
}

export default ShoppingCart