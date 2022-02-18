import Image from 'next/image'
import React from 'react'
import stats from "../media/stats.svg"
import list from "../media/list.svg"
import work from "../media/work.svg"
import Button from './Button'

function Offers() {
  return (
    <div className='min-h-[768px] px-[14px] xl:px-[135px] md:px-20 py-16 lg:py-20'>
      <div className='flex flex-col items-center gap-y-8'>
        <p className='redH2'>Nominavi suavitate</p>
        <p className='H1'>Offendit persecuti</p>
        <p className='text-xl'>Eu pro ludus dignissim. Eos debet molestiae constituto ne, quo consul interesset ei, cotidieque theophrastus ea his.</p>
        <div className='grid grid-cols-1 gap-y-16 mt-10 lg:mt-20 md:grid-cols-3'>
          <Item i="01" img={stats} text="Possim" txt="An animal assentior nam, sed qualisque deterruisset ea qui melius erroribus" />
          <Item i="02" img={work} text="Vivendo" txt="Assum ubique quodsi sea ad partem vocent vel, ius id viris utinam" />
          <Item i="03" img={list} text="Deterruisset" txt="Nam natum volutpat eu natum elitr vel te id qui purto dicit" />
        </div>
        <Button text="Learn More" style="text-white bg-[#BE6361] lg:mt-16"/>
      </div>
    </div>
  )
}

function Item({ img, text, txt, i }) {
  return (
    <div className='flex flex-col items-center px-6 gap-y-4 text-center'>
      <div className='relative h-[170px] w-[170px] flex items-center justify-center border-[#333333] border-2 border-opacity-50 rounded-md shadow-2xl'>
        <div className='absolute top-2 left-2 font-logo text-black text-2xl text-opacity-5'>{i}</div>
        <Image className='text-[#BE6361]' src={img} objectFit="contain"/>
      </div>
      <p className='font-basic text-2xl'>{text}</p>
      <p className='text-[#333333] text-opacity-50 font-medium'>{txt}</p>
    </div>
  )
}

export default Offers