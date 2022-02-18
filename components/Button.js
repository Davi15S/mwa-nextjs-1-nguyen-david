import React from 'react'

function Button({text, style}) {
  return (
    <button className={`font-basic py-3 px-14 rounded-md ${style}`}>{text}</button>
  )
}

export default Button