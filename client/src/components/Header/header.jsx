import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import Logo from '../Logo.jsx';
import Footer from '../Footer/footer.jsx';
import "./header.module.css";

const Header = () => {

  const nav = [
    {
      name: "Rent",
      path: '/rent'
    },
    {
      name: "Buy",
      path: '/buy'
    },
    {
      name: "Sell",
      path: '/sell'
    }
  ]
  
  const style = {
    backgroundColor: "#E8E6F9",
    color: '#7065F0',
    padding: '0.5em',
    borderRadius: '0.4rem'
  }

  return (
    <>
      <header 
        className='w-full flex justify-between items-center pt-4 pb-4 p-10 backdrop-blur-3xl border-b-2 border-[#E0DEF7] z-999 fixed top-0'>
        <Logo />
        <nav>
          <ul className='flex gap-8 items-center'>
            {nav.map(data => <NavLink key={data.name} to={data.path} style={({isActive}) => isActive ? style : null}>{data.name}</NavLink>)}
            <li>Manage Property</li>
            <li>Resources</li>
          </ul>
        </nav>

        <div className='flex gap-4 items-center'>
          <button 
            className='border-2 border-[#E0DEF7] pt-3 pb-3 p-6 text-black rounded-xl cursor-pointer'><Link to='/login'>Login</Link></button>

          <button
            className='bg-[#7065F0] pt-3 pb-3 p-6 text-white rounded-xl cursor-pointer'><Link to='/sign-up'>Sign up</Link></button>
        </div>
      </header>

      <Outlet />

      <Footer />
    </>
  )
}

export default Header