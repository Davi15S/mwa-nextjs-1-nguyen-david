import React from 'react'

function GalleryNavbar() {
    return (
        <div className="h-[80px] bg-[#FFF2DD] padding">
            <div className="flex items-center gap-8 px-10 sm:justify-center font-semibold lg:px-0 overflow-scroll scrollbar-hide h-full">
                <p className="cursor-pointer">Vivendo</p>
                <p className="text-black opacity-50 cursor-pointer hover:opacity-100 transition-all duration-200">Omnesque</p>
                <p className="text-black opacity-50 cursor-pointer hover:opacity-100 transition-all duration-200">Lobortis</p>
                <p className="text-black opacity-50 cursor-pointer hover:opacity-100 transition-all duration-200">Inimicus</p>
                <p className="text-black opacity-50 cursor-pointer hover:opacity-100 transition-all duration-200">Mediocritatem</p>
            </div>
        </div>
    )
}

export default GalleryNavbar