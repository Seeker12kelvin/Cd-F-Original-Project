import React, { useState } from 'react'
import "./home.module.css"
import { useLocation, Outlet, NavLink } from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../components/Logo"
import { FaAngleDown, FaBell, FaSearch } from 'react-icons/fa';

const Home = () => {

  const userInfo = useLocation()
  const { name, email,  } = userInfo.state
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
  const lastName = name.split('') === 1 ? name.split(' ')[1]: name.split('') === 3 ? name.split('')[2]: name.split(' ')[2]

  return (
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
            <NavLink to={''} end state={{name, email, firstName, lastName}} style={({isActive}) => isActive ? styleLists : null}>Dashboard</NavLink>
            <NavLink to='applications' state={{name, email, firstName, lastName}} style={({isActive}) => isActive ? styleLists : null}>Applications</NavLink>
            <NavLink to='favorite' state={{name, email, firstName, lastName}} style={({isActive}) => isActive ? styleLists : null}>Favorited</NavLink>
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

          <div className='h-12 border border-[#E0DEF7]'></div>

          <div className='border-[#E0DEF7] border-2 rounded-xl p-2'>
            <div id='user-initials' className='text-[1em] flex items-center gap-2'>
              <p className='p-2 bg-[#7065F0] w-10 text-center h-fit text-white rounded-full'>{firstName.split('')[0]}{lastName.split('')[0]}</p>
              <p>{firstName}</p>
              <FaAngleDown />
            </div>
          </div>

        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Home