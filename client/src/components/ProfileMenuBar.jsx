import React, { useContext, useState } from 'react';
import User from './User';
import { FaAngleDown, FaReadme } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPerson } from 'react-icons/fa6';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiLogout } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";

const ProfileMenuBar = () => {

  const { userData, userLogged } = useContext(User)
  const name = userData.name

  const firstName = name.split(' ')[0]
  const lastName = name.split('') === 1 ? name.split('')[1]: name.split('') === 3 ? name.split('')[2]: name.split(' ')[2]
  
  const [menu, setMenu] = useState(false)

  const menuBarList = [
    {name: 'My Profile',
      link: '',
      icon: <CgProfile />,
      style: 'pb-4 text-[#000929] text-[1rem] font-medium border-b border-[#E0DEF7]'
    },
    {name: 'My Info',
      link: '',
      icon: <FaReadme />,
      style: 'pb-4 text-[#000929] text-[1rem] font-medium border-b border-[#E0DEF7]'
    },
    {name: 'Help',
      link: '',
      icon: <IoIosHelpCircleOutline />,
      style: 'pb-4 text-[#000929] text-[1rem] font-medium border-b border-[#E0DEF7]'
    },
    {name: 'Logout',
      link: '',
      icon: <CiLogout />,
      style: 'text-[#000929] text-[1rem] font-medium'
    }
  ]

  return (
    <>
      <hr className='rotate-180 border-[#E0DEF7] border h-10 rounded-xl'/>

      <button 
        onClick={() => setMenu(prev => !prev)}
        className='flex items-center gap-2 border-[#E0DEF7] h-fit border-[0.09375rem] rounded-xl p-2'>
        <span className='p-2 bg-[#7065F0] w-10 text-center h-fit text-white rounded-full'>{firstName.split('')[0]}{lastName.split('')[0]}</span>
        {firstName}
        <FaAngleDown />
      </button>

      {menu ?
        <ul className='flex flex-col bg-[white] justify-center p-4 gap-4 border fixed right-10 top-22 shadow-xl border-[#E0DEF7] rounded-xl w-60'>
          {menuBarList.map(data => {
            return (
              <Link to={data.link} className={`flex items-center gap-4 ${data.style}`} key={data.name}>{data.icon}{data.name}</Link>
            )
          })}
        </ul>
      :
      null
      }
      
    </>
  )
}

export default ProfileMenuBar