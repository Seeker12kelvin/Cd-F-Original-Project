import React from 'react'
import './settings.module.css'
import LogoImg from '../../Images/Logo.png'
import { FaBell } from 'react-icons/fa'
import ProfileMenuBar from '../../components/ProfileMenuBar'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Settings = () => {

  const style = {
    borderRadius: '0rem',
    borderLeft: '0.2rem solid #7065F0'
  }

  return (
    <div className='w-screen min-h-screen bg-[#F0EFFB]'>
      <header className='flex w-full items-center justify-between px-5 py-10 border-b border-[#F0EFFB] h-16 fixed top-0 bg-white'>

        <div className='flex gap-2 items-center justify-start m-0 p-0'>
          <img src={LogoImg} alt="Estatery Logo" className='h-12 m-4'/>
          <h1 className='font-bold text-2xl ml-4'>Settings</h1>
        </div>

        <div className='flex items-center gap-4'>
           <button className='h-full p-3 rounded-xl bg-[#E0DEF7] border-[#E0DEF7] text-center border-r-2 flex items-center'>
              <FaBell className=' text-center h-full w-5' />
            </button>

            <ProfileMenuBar />
        </div>

      </header>

      <main className='h-full w-full flex pt-20.5 bg-[#F0EFFB]'>
        <section className='mb-10 bg-[white] fixed w-full p-5'>
          <Link to="/home">Back to Dashboard</Link>
        </section>
        <aside className='w-69 mt-20.5 h-full fixed left-0 px-5'>
          <nav>
            <ul className='flex flex-col gap-5 text-lg'>
              <NavLink 
                style={({isActive}) => isActive ? style : null} 
                to=""
                end
                className='cursor-pointer text-[#394150] border-b-2 border-[#E0DEF7] pl-5 py-3'>
                Profile
              </NavLink>

              <NavLink 
                style={({isActive}) => isActive ? style : null} 
                to="/settings/my-account"
                className='cursor-pointer text-[#394150] border-b-2 border-[#E0DEF7] pl-5 py-3'>
                My Account
              </NavLink>

              <NavLink 
                style={({isActive}) => isActive ? style : null} 
                to="/settings/notifications" 
                className='cursor-pointer text-[#394150] border-b-2 border-[#E0DEF7] pl-5 py-3'>
                Notifications
              </NavLink>
            </ul>
          </nav>
        </aside>

        <Outlet />
      </main>
    </div>
  )
}

export default Settings