import React from 'react'
import LogoImg from '../Images/Logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='flex gap-2 items-center text-xl font-bold'>
      <img
        className='h-6 m-0' 
        src={LogoImg}
        alt='Logo'/>
      
      <Link to='/'>Estatery</Link>
    </div>
  )
}

export default Logo