import React, { useEffect, useState } from 'react'
import Button from "./Button"
import Flickity from 'react-flickity-component'
import img from "../media/img.svg"
import img2 from "../media/img2.svg"
import Image from 'next/image'

function Gallery() {
    return (
        <div className='min-h-[768px] padding py-16 lg:py-16 space-y-6'>
            <div className='flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:items-center'>
                <div className='space-y-4'>
                    <p className='redH2'>Vim dolore</p>
                    <p className='H1'>Epicurei aeque</p>
                </div>
                <Button text="All work" style="text-[#BE6361] border-2 border-opacity-30 hover:border-opacity-100 duration-200 transition-all hover:bg-[#BE6361] hover:bg-opacity-5 border-[#BE6361]" />
            </div>
            <Carousel />
        </div>
    )
}

function Carousel() {
    return (
        <Flickity
            options={{
                autoPlay:5000,
                adaptiveHeight: true,
                prevNextButtons: false,
                freeScroll: false,
                draggable: false,
                groupCells: true
            }}>
            <div className='galleryItem'><GalleryItem img={img} text="Postea nam at posse dicta" /></div>
            <div className='galleryItem'><GalleryItem img={img2} text="Ea vivendo omnesque" /></div>
            <div className='galleryItem'><GalleryItem img={img2} text="Ea vivendo omnesque" /></div>
            <div className='galleryItem'><GalleryItem img={img} text="Postea nam at posse dicta" /></div>
        </Flickity>
    )
}

function GalleryItem({ img, text }) {
    return (
        <div>
            <Image src={img} objectFit="contain" />
            <p className='font-basic text-2xl'>{text}</p>
        </div>
    )
}

export default Gallery