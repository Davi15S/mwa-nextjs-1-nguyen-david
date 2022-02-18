import React from 'react'
import Button from './Button'

function TrySection() {
    return (
        <div className="bg-bg-court padding h-[448px] bg-center bg-cover flex items-center justify-center flex-col space-y-10 text-center">
                <p className='font-basic text-white text-xl'>Eos lobortis inimicus</p>
                <p className='font-logo text-white text-4xl lg:text-6xl'>Pro ad ubique erroribus in modo mutat sed</p>
                <Button text="Try now" style="border-black border-2 bg-white hover:bg-opacity-90 transition-all duration-200" />
        </div>
    )
}

export default TrySection