import React from 'react'
import { MdDelete, MdMenu } from 'react-icons/md'
import { FaArchive, FaStar, FaAlignJustify, FaBold, FaItalic, FaLink } from 'react-icons/fa'
import { RiAttachment2 } from "react-icons/ri";
import { BiSend } from 'react-icons/bi';
import { useParams } from 'react-router-dom'
import { CiWarning } from 'react-icons/ci';

const ChatBox = () => {

  const { id } = useParams()

  if(!id){
    return <div className='w-[50%] bg-[#b2adeb53] text-black p-6 flex items-center justify-center'>Select a chat to start messaging</div>
  }
  return (
    <div className='w-[50%] bg-[#b2adeb53] p-6 flex flex-col justify-between'>
      <div className='flex items-center justify-between bg-white p-4 rounded-xl border-[#E0DEF7] border-[0.09375rem]'>
        <div className='flex items-center gap-4'>
          <MdDelete />
          <FaArchive />
          <CiWarning />
        </div>

        <div className='flex items-center gap-4'>
          <FaStar />
          <MdMenu />
        </div>
      </div>
      <form className='p-3 bg-white rounded-xl border-[#E0DEF7] border-[0.09375rem]'>
        <input type="text" placeholder='Type your message...' className='w-full bg-transparent mb-3 outline-none' />
        <div className='flex items-center w-full justify-between'>
          <div className='flex items-center gap-5'>
            {/* Additional features like attachments can be added here */}
            <RiAttachment2 />
            <FaLink />
            <FaBold />
            <FaItalic />
            <FaAlignJustify />
          </div>
          <button className='bg-[#7065F0] px-4 py-2 text-white rounded-lg flex items-center gap-2'>Send <BiSend /></button>
        </div>
      </form>
    </div>
  )
}

export default ChatBox