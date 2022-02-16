import Image from 'next/image'
import React from 'react'
import stats from "../media/stats.svg"
import list from "../media/list.svg"
import work from "../media/work.svg"

function Offers() {
  return (
    <div className='min-h-[768px] px-[14px] xl:px-[135px] md:px-20 my-16 lg:my-36'>
      <div className='flex flex-col items-center gap-y-8'>
        <p className='text-[#BE6361] font-basic text-xl'>Nominavi suavitate</p>
        <p className='font-logo text-4xl'>Offendit persecuti</p>
        <p className='text-xl'>Eu pro ludus dignissim. Eos debet molestiae constituto ne, quo consul interesset ei, cotidieque theophrastus ea his.</p>
        <div className='grid grid-cols-1 gap-y-16 mt-10 lg:mt-20 md:grid-cols-3'>
          <Item i="01" img={stats} text="Possim" txt="An animal assentior nam, sed qualisque deterruisset ea qui melius erroribus" />
          <Item i="02" img={work} text="Vivendo" txt="Assum ubique quodsi sea ad partem vocent vel, ius id viris utinam" />
          <Item i="03" img={list} text="Deterruisset" txt="Nam natum volutpat eu natum elitr vel te id qui purto dicit" />
        </div>
        <button className='text-white bg-[#BE6361] font-basic py-3 px-14 rounded-md lg:mt-16'>Learn More</button>
      </div>
    </div>
  )
}

function Item({ img, text, txt, i }) {
  return (
    <div className='flex flex-col items-center px-6 gap-y-4 text-center'>
      <div className='p-10 relative border-[#333333] border-2 border-opacity-50 rounded-md shadow-2xl'>
        <div className='absolute top-3 left-3 font-logo text-black text-2xl text-opacity-5'>{i}</div>
        <Image className='text-[#BE6361]' src={img} objectFit="contain"/>
      </div>
      <p className='font-basic text-2xl'>{text}</p>
      <p className='text-[#333333] text-opacity-50 font-medium'>{txt}</p>
    </div>
  )
}

export default Offers