import React from 'react'
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import portfolio_img from "/public/portfolio.webp"

const Hero = () => {
  return (
    <div id ='hero' className='w-1/2 flex justify-items-start bg no repeat bg-cover'
    style={{backgroundSize:"100%",backgroundPosition:"left 800px top 800px"}}> 
    <Image src={portfolio_img} alt='hero image' width={900} height={700}/>
 

  <div className='container grid lg grid-cols-2 h-[calc(100vh-60px)]'>
    
    <div className='hidden lg:block'></div>
    <div className='text-[100px] sm:text-[11
    0px] font-bold leading-tight flex-auto pt-5 pl-3 flex gap-4 underline caret-rose-800'>
      <div>
        <p>i'm</p>
        <p>WEB</p>
        <p>DEVELOPER</p>
      </div>
    </div>
    </div> 
    </div>
  )}


export default Hero