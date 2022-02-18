import Image from 'next/image'
import React from 'react'
import heart from "../media/heart.svg"
import star from "../media/star.svg"
import rocket from "../media/rocket.svg"
import broadcast from "../media/broadcast.svg"
import user from "../media/user.svg"
import Button from './Button'
import image from "../media/marginalia-coming-soon.svg"

function Ladder() {
    return (
        <div className='min-h-[768px] bg-[#FFF2DD] padding grid grid-cols-1 lg:grid-cols-2 gap-x-10'>
            <div className='space-y-8 py-6 self-center'>
                <div className='redH2'>Mel solum</div>
                <div className='H1 whitespace-nowrap'>Mazim iudico</div>
                <div className="space-y-4">
                    <Item img={heart} text="Bonorum minimum et sit tritani te, qui feugait electram"/>
                    <Item img={star} text="Cum ei assum tation homero mel corpora consectetuer"/>
                    <Item img={rocket} text="At per assum dicit verterem veri eripuit honestatis"/>
                    <Item img={broadcast} text="Lorem deterruisset ea vis expetenda has ex"/>
                    <Item img={user} text="Usu eu hinc lorem inciderint minim movet quodsi"/>
                </div>
                <Button text="Get started" style="text-[#BE6361] border-2 border-opacity-30 hover:border-opacity-100 duration-200 transition-all hover:bg-[#BE6361] hover:bg-opacity-5 border-[#BE6361]"/>
            </div>
            <Image src={image} objectFit="contain"/>
        </div>
    )
}

function Item({img, text}){
    return(
        <div className='flex items-center space-x-6'>
            <Image src={img} objectFit="contain"/>
            <p className="font-semibold">{text}</p>
        </div>
    )
}

export default Ladder