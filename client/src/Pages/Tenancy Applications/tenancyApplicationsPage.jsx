import React from 'react'
import './tenancyApplicationsPage.module.css'
import HeaderContent from '../../components/HeaderContent'
import Logo from '../../components/Logo'
import { FaAngleDown, FaBath, FaBed, FaBell, FaRegArrowAltCircleRight, FaRegBell } from 'react-icons/fa'
import User from '../../components/User'
import ProfileMenuBar from '../../components/ProfileMenuBar'
import { Link, NavLink, Outlet } from 'react-router-dom'
import properDetails from '../../data/data'
import { MdKeyboardArrowRight } from "react-icons/md";

const TenancyApplicationsPage = () => {

  const steps = [
    {
      id: '1',
      step: 'Personal',
      link: '.',
      icon: <MdKeyboardArrowRight />
    },
    {
      id: '2',
      step: 'Employment',
      link: 'employment-status',
      icon: <MdKeyboardArrowRight />
    },
    {
      id: '3',
      step: 'Living Arrangements',
      link: 'living-arrangements',
      icon: <MdKeyboardArrowRight />
    },
    {
      id: '4',
      link: 'documents',
      step: 'Docs'
    }
  ]
  
  const styles = {
    backgroundColor: '#7065F0',
    color: 'white'
  }

  return (
    <div className='flex flex-col items-center'>
      <header className='flex items-center w-full justify-between p-5 pl-10 pr-10 border-[0.09375rem] border-[#F0EFFB]'>
        <Logo />

        <nav className='flex items-center gap-5'>

          <ul className='flex gap-7 items-center'>
            <Link>Dashboard</Link>
            <Link>Applications</Link>
            <Link className='bg-[#F7F7FD] p-3 rounded-xl w-fit'><FaRegBell /></Link>
          </ul>

          <ProfileMenuBar />
        </nav>
      </header>


      <section className='flex flex-col gap-8 w-full items-center pb-8 mt-8'>
        <h1 className='text-[#000929] text-[2.5rem] font-bold text-center'>Tenancy Applications</h1>

        <ul className='flex items-center gap-4'>
          {steps.map(data => {
            return(
              <NavLink style={({isActive}) => isActive ? styles : null} to={data.link} className='flex gap-2 items-center text-[1rem]'>
                <span className='bg-[#F0EFFB] rounded-full pl-2 pr-2 h-fit'>{data.id}</span> 
                {data.step}
                <span className='text-lg'>{data.icon}</span>
              </NavLink>
            )
          })}
        </ul>
      </section>

      <Outlet />
    </div>
  )
}

export default TenancyApplicationsPage