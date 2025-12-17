import React, { useContext, useState } from 'react'
import "./home.module.css"
import { Outlet, NavLink, Link } from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../components/Logo"
import { FaAngleDown, FaBell, FaSearch } from 'react-icons/fa';
import User from '../../components/User';
import ProfileMenuBar from '../../components/ProfileMenuBar';

const Home = () => {

  const { userData, userLogged } = useContext(User)
  const name = userData.name

  const [remove, setRemove] = useState(false)

  const [searchFilter, setSearchFilter] = useState(null)

  const handleChange = (e) => {
    setSearchFilter(e.target.value)
  }

  const styleLists = {
    color: '#7065F0',
    borderBottom: '3px solid #7065F0',
    marginTop: '2.3rem',
    paddingBottom: '2rem'
  }

  const firstName = name.split(' ')[0]

  return (
    // !userLogged
    //   ?
    //   <div className='flex flex-col gap-4 justify-center items-center h-screen'>
    //     <p className='text-4xl'>You do not have access to this page.</p>
    //     <div className='flex gap-4 text-2xl'>
    //       <Link to={'/signUp&login/login'}>Login?</Link>
    //       <Link to={'/signUp&login/sign-up'}>Sign-Up?</Link>
    //     </div>
    //   </div>
    //   :
      <div>
        {!remove ? <div className='bg-[#7065F0] w-full p-4 pr-10 text-[white] font-light flex items-center justify-between'>
          <p>Welcome, {firstName}! Here’s your dashboard to search listing and track your tenant applications.</p>
          <div className='flex gap-4 items-center'>
            <button className='bg-[white] text-[#7065F0] p-3 rounded-xl font-normal'>Learn more</button> 
            <IoCloseOutline onClick={() => setRemove(true)} className='text-xl cursor-pointer bg-[#8080804c]' />
          </div>
        </div>: null}

        <div className='flex justify-between pr-10 pl-10 w-full items-center h-fit border-b-2 border-[#F0EFFB]'>

          <div className='flex items-center h-full gap-15'>
            <Logo />
            <ul className='flex items-center h-full gap-12'>
              <NavLink to={''} end style={({isActive}) => isActive ? styleLists : null}>Dashboard</NavLink>
              <NavLink to='applications' style={({isActive}) => isActive ? styleLists : null}>Applications</NavLink>
              <NavLink to='favorite' style={({isActive}) => isActive ? styleLists : null}>Favorited</NavLink>
            </ul>
          </div>

          <div className='flex items-center gap-5 w-[42%]'>

            <div className='border-[#E0DEF7] outline-none border-2 rounded-xl pl-2 pr-2 bg-[#F7F7FD] w-full flex items-center gap-2'>
              <FaSearch />
              <input 
                className='outline-none rounded-xl p-2 w-full'
                type='text'
                value={searchFilter} 
                placeholder='Search for properties, application, etc.'
                onChange={handleChange}/>
            </div>

            <div className='h-full p-3 rounded-xl bg-[#E0DEF7] border-[#E0DEF7] text-center border-r-2 flex items-center'>
              <FaBell className=' text-center h-full w-5' />
            </div>

            <ProfileMenuBar />

          </div>
        </div>

        <Outlet />
      </div>
  )
}

export default Home