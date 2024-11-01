import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div className='pt-3 flex justify-between items-center'> 
    <div className=''>
      <div className='flex-justify position:absolute top-0 right-0'> RIDA'S PORTFOLIO</div>

<div>
      <ul className= 'flex gap-10 place-content-end  flex-justify-end text-5xl underline ring-offset-pink-800'>
        
      <li> < Link className='menulink'href ="/">  Home </Link></li>
      <li><Link className='menulink'  href="/about">About </Link></li>
      <li><Link className='menulink'   href="/Skills">Skills</Link></li>
      <li> <Link className='menulink' href="/Contact">Contact</Link></li>
      </ul>
</div>
 
    </div>
    
    </div>
    
  )
}

export default Navbar