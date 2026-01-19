import React, { useContext, useEffect } from 'react'
import './message.module.css'
import { FaBurger } from 'react-icons/fa6'
import { FaBell, FaList, FaRegListAlt } from 'react-icons/fa'
import { IoSettingsOutline } from "react-icons/io5";
import { PiHouseSimpleLight } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { TbUsersGroup } from "react-icons/tb";
import { GoLightBulb } from "react-icons/go";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import LogoImg from '../../Images/Logo.png'
import ProfileMenuBar from '../../components/ProfileMenuBar';
import User from '../../components/User';

const Message = () => {

  const style = {
    backgroundColor: "#F0EFFB",
    color: '#7065F0',
    padding: '0.5em',
    borderRadius: '0.4rem'
  }

   const nav = [
    {
      icon: <FaList />,
      link: 'iuuwfaie',
    },
    {
      icon: <PiHouseSimpleLight />,
      link: 'iuuwfaie',
    },
    {
      icon: <AiOutlineDollar />,
      link: 'iuuwfaie',
    },
    {
      icon: <TbUsersGroup />,
      link: 'iuuwfaie',
    },
    {
      icon: <GoLightBulb />,
      link: 'iuuwfaie',
    },
    {
      icon: <CiMail />,
      link: '/message',
      end: true
    }
  ]

  const navigate = useNavigate()

  const { many, listOfMessages } = useContext(User)

  useEffect(() => {
    navigate("/message/chat");
  }, [listOfMessages])

  return (
    <>
      <header className='w-full h-16 top-0 fixed bg-white border-b border-[#E4E7EB] flex items-center justify-between pl-25 p-10'>
        <button className='md:hidden'>
          <FaBurger className='text-2xl text-[#100a556c]' />
        </button>

        <h1 className='font-bold text-2xl'>Messages</h1>
        {many && <p>{many}</p>}

        <div className='flex items-center gap-4'>
           <button className='h-full p-3 rounded-xl bg-[#E0DEF7] border-[#E0DEF7] text-center border-r-2 flex items-center'>
              <FaBell className=' text-center h-full w-5' />
            </button>

            <ProfileMenuBar />
        </div>
      </header>

      <main className='flex h-screen w-screen'>
        <aside className='w-fit h-full left-0 fixed bg-white border-r border-[#E4E7EB] pt-3 p-4 flex flex-col justify-center gap-4'>
          
          <nav className='flex flex-col h-full justify-between items-center'>

            <img
              className='h-12 w-12 -mb-20'
              src={LogoImg}
              alt='Logo'
            />
            
            <ul className='flex flex-col gap-7'>

              {nav.map((item, index) => (
                <li key={index}>
                  <NavLink style={({isActive}) => isActive ? style : null} to={item.link} end={item.end} className='flex h-fit flex-col items-center text-2xl text-[#100a556c]'>
                    {item.icon}
                  </NavLink>
                </li>
              ))}

            </ul>

            <div className='gap-4 text-2xl text-[#100a556c] flex flex-col'>
              <NavLink className='flex items-center gap-2 text-2xl text-[#100a556c]'>
                <GoQuestion />
              </NavLink>

              <NavLink to={'/settings'} className='flex items-center gap-2 text-2xl text-[#100a556c]'>
                <IoSettingsOutline />
              </NavLink>
            </div>
          </nav>
          
        </aside>
 
        <Outlet />
      </main>
    </>
  )
}

export default Message