import React, { useContext } from 'react'
import User from '../../components/User'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaAlignJustify, FaArchive, FaBold, FaItalic, FaLink, FaSearch, FaStar } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import NewMessageModal from './newMessageModal'
import { listOfUserMessages } from '../../data/data'
import { BiSend } from 'react-icons/bi'
import { MdDelete, MdMenu } from 'react-icons/md'
import { CiWarning } from 'react-icons/ci'
import { FaPenNib } from 'react-icons/fa6'
import { RiAttachment2 } from "react-icons/ri";

const UserChats = () => {

  const { chatUser, setNewMessage } = useContext(User)

  const style = {
    backgroundColor: "#F7F7FD",
  }

  if(!chatUser){
    return <div>No chat user selected</div>
  }
  return (
    <>
    <section className='w-full mt-20 ml-20 flex'>
      <aside className='py-6 w-[25%] flex flex-col gap-6 relative'>
        <form className='flex items-center gap-4 h-[8%] px-5 absolute top-10 left-auto right-auto w-full'>
          <label htmlFor='search' className='border-[#E0DEF7] border-[0.09375rem] rounded-lg bg-[#F7F7FD] flex items-center gap-2 p-4 w-fulll'>
            <FaSearch  className='text-[#7065F0]'/>
            <input
              id='search'
              type="search" placeholder='Search...' className='outline-none w-full' />
          </label>
          <button
            type="button"
            onClick={() => setNewMessage(true)}
            className='bg-[#7065F0] h-full flex items-center gap-2 rounded-lg text-white text-3xl w-fit px-4'>+</button>
        </form>

        <div className='mt-24 mb-4 flex items-center justify-between'>
          {listOfUserMessages.map((data, index) => {

            const firstName = data.name.split(' ')[0]
            const lastName = data.name.split('') === 1 ? data.name.split('')[1]: data.name.split('') === 3 ? data.name.split('')[2]: data.name.split(' ')[2]

            return(
              <NavLink
                style={({isActive}) => isActive ? style : null}
                key={data.id} 
                to={`/message/chat/${data.id}`} 
                className='w-full p-4 flex items-center border-b border-[#E0DEF7] hover:bg-[#F7F7FD] rounded-lg'>
                {
                  data.profilePic
                  ?
                  <img src={data.profilePic} alt={`${data.name} profile`} className='h-10 w-10 rounded-full object-cover' />
                  :
                  <div className='bg-[#E0DEF7] rounded-full h-10 w-10 flex items-center justify-center float-left mr-2'>
                    <BsPersonFill className='text-2xl text-white bg-transparent rounded-full' />
                  </div>
                }
                <div className='flex flex-col gap-1 ml-3'>
                  <h2 className='text-[#000929] font-bold'>{firstName} {lastName}</h2>
                  <p className='text-sm'>{data.email}</p>
                </div>
              </NavLink>
            )
          })}
        </div>
      </aside>

      <Outlet />
      
    </section>

    <NewMessageModal />
    </>
  )
}

export default UserChats