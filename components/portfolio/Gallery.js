import Image from 'next/image'
import React from 'react'
import stairs from "../../media/portfolio-images/stairs.svg"
import building from "../../media/portfolio-images/building.svg"
import hand from "../../media/portfolio-images/hand.svg"
import pool from "../../media/portfolio-images/pool.svg"
import sand from "../../media/portfolio-images/sand.svg"
import stadium from "../../media/portfolio-images/stadium.svg"
import woman from "../../media/portfolio-images/woman.svg"
import Button from '../index/Button'

function Gallery() {
    return (
        <div className='padding py-5 lg:pt-16 pb-20 flex flex-col items-center gap-y-16'>
            <div className='flex flex-wrap justify-center'>
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                    <GalleryItem img={stairs} h1="Ubique erroribus" txt="Modo mutat" />
                    <GalleryItem img={woman} h1="Quot suscipit" txt="Natum animal" />
                    <GalleryItem img={pool} h1="Platonem eos" txt="Mazim nemore" />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                    <GalleryItem img={sand} h1="Efficiendi nihil" txt="Tantas" />
                    <GalleryItem img={hand} h1="Officiis similique" txt="Tollit indoctum" />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                    <GalleryItem img={building} h1="Vitae decore" txt="Quidam" />
                    <GalleryItem img={stadium} h1="Singulis an ius" txt="Nullam" />
                </div>
            </div>
            <Button text="Load More" style="text-[#BE6361] border-2 border-opacity-30 hover:border-opacity-100 duration-200 transition-all hover:bg-[#BE6361] hover:bg-opacity-5 border-[#BE6361]" />
        </div>
    )
}

function GalleryItem({ img, h1, txt }) {
    return (
        <div className='max-w-[400px] m-2 my-3 xl:mx-5'>
            <Image className='rounded-md' src={img} objectFit="contain" />
            <div className='h-[112px] flex flex-col p-5 gap-y-1 hover:scale-105 duration-200 transition-all cursor-pointer justify-center bg-white shadow-lg w-5/6 mx-auto relative -mt-12 rounded-md border border-[#E5E5E5]'>
                <p className='font-bold text-2xl'>{h1}</p>
                <p className='opacity-50 font-semibold'>{txt}</p>
            </div>
        </div>
    )
}

export default Gallery