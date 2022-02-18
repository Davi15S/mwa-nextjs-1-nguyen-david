import React from 'react'

function Button({text, style}) {
  return (
    <button className={`font-basic w-[170px] h-[48px] rounded-md ${style}`}>{text}</button>
  )
}

export default Button