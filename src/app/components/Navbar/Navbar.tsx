import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div className='pt-3 flex justify-between items-center'> 
    <div className=''>
      <div className='flex-justify-between-center'> RIDA'S PORTFOLIO </div>

<div>
      <ul className= 'flex justify-items-center py-10'>
        
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