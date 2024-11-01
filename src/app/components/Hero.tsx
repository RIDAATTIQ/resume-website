import React from 'react'
import Navbar from './Navbar/Navbar';
import Image from 'next/image';
  import portfolio_img from "./src/components/public/portfolio.webp"
const Hero = () => {
  return (
    <div id ='hero' className='min-h-screen bg no repeat bg-cover'
    style={{backgroundSize:"80%",backgroundPosition:"right 100px top 100px"}}> 
    <Image src={portfolio_img} width={500} height={700} alt='portfolio image' />
 

  <div className='container grid lg grid-cols-2 h-[calc(100vh-60px)]'>
    
    <div className='hidden lg:block'></div>
    <div className='text-[80px] sm:text-[10
    0px] font-bold leading-tight flex justify-items-end '>
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