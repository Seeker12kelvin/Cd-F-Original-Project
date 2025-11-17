import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from "../../Images/Logo.png"

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center pt-4 pb-4 p-10'>
        <div className='flex gap-1 items-center'>
          <img
            className='h-6 m-0' 
            src={Logo} 
            alt='Logo'/>
          
          <p>Estatery</p>
        </div>
        <nav>
          <ul className='flex gap-8 items-center'>
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Manage Property</li>
            <li>Resources</li>
          </ul>
        </nav>

        <div className='flex gap-4 items-center'>
          <button 
            className='border border-[#E0DEF7] pt-3 pb-3 p-6 text-black rounded-xl cursor-pointer'><Link to='/login'>Login</Link></button>

          <button
            className='bg-[#7065F0] pt-3 pb-3 p-6 text-white rounded-xl cursor-pointer'><Link to='/sign-up'>Sign up</Link></button>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header