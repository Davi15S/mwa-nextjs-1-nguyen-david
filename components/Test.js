import Image from 'next/image'
import React from 'react'
import printer from "../media/printer.svg"

function Test() {
  return (
    <div>
        <Image src={printer} objectFit="contain" />
    </div>
  )
}

export default Test