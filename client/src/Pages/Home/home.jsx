import React, { useState } from 'react'
import "./home.module.css"
import { useLocation } from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../components/Logo"

const Home = () => {

  const userInfo = useLocation()
  const { name, email } = userInfo.state
  const [remove, setRemove] = useState(false)

  const firstName = name.split(' ')[0]

  return (
    <div>
      {!remove ? <div className='bg-[#7065F0] w-full p-4 pr-10 text-[white] font-light flex items-center justify-between'>
        <p>Welcome, {firstName}! Here’s your dashboard to search listing and track your tenant applications.</p>
        <div className='flex gap-4 items-center'>
          <button className='bg-[white] text-[#7065F0] p-3 rounded-xl font-normal'>Learn more</button>
          <IoCloseOutline onClick={() => setRemove(true)} className='text-xl cursor-pointer bg-[#8080804c]' />
        </div>
      </div>: null}

      <div className='flex w-full h-fit'>
        <div className='flex items-center gap-15'>
          <Logo />
          <ul className='flex items-center gap-12'>
            <li>Dashboard</li>
            <li>Applications</li>
            <li>Favorited</li>
          </ul>
        </div>
        <div>
          <input />
        </div>
      </div>
    </div>
  )
}

export default Home