import React from 'react'
import LogoImg from '../Images/Logo.png'

const Logo = () => {
  return (
    <div className='flex gap-2 items-center text-xl font-bold'>
      <img
        className='h-6 m-0' 
        src={LogoImg}
        alt='Logo'/>
      
      <p>Estatery</p>
    </div>
  )
}

export default Logo