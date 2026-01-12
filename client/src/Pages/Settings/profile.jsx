import React, { useContext } from 'react'
import User from '../../components/User'
import { BsPersonFill } from "react-icons/bs";

const Profile = () => {

  const { userData } = useContext(User)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className='m-auto mt-20.5 w-157 border border-[#E0DEF7] bg-white rounded-lg shadow-md'>
      <div className='mb-6 border-b-[0.09375rem] pb-6 p-10 border-[#E0DEF7]'>
        <h2 className='font-medium text-xl mb-4'>Personal Info</h2>
        <p className='text-black  mb-6'>Avatar</p>
        <div className='flex gap-4 items-center'>
          {
          userData.profilePic
          ?
          <input type="file" accept="image/*" />
          :
          <div className='bg-[#E0DEF7] rounded-full h-24 w-24 flex items-center justify-center'>
            <BsPersonFill className='text-6xl text-white bg-transparent rounded-full' />
          </div>
          }
          <button type="button" className='bg-[#7065F0] text-white py-3 px-6 rounded-xl'>Upload</button>
          <button type="button" className='border-2 border-[#E0DEF7] text-[#7065F0] py-2.5 px-6 rounded-xl'>Remove</button>
        </div>
      </div>
      
      {/* Profile settings form or content goes here */}
    </form>
  )
}

export default Profile