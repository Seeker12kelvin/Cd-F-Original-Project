import React, { useContext } from 'react'
import { FaXmark } from 'react-icons/fa6'
import User from '../../components/User'

const NewMessageModal = () => {

  const {newMessage, setNewMessage, handleNewMessage, filled, setFilled, there} = useContext(User)

  return (
    <>
      {newMessage ?
      <section className='fixed inset-0 bg-[#0009297e] bg-opacity-50 z-10'>
        <form
          onSubmit={handleNewMessage}
          className='w-103 h-100.5 flex flex-col gap-6 bg-white border border-[#E0DEF7] rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex justify-between border-b p-6 border-[#E0DEF7] pb-4'>
            <h2 className='font-bold text-lg'>New Message</h2>

            <button onClick={() => setNewMessage(false)} className='text-2xl text-[#000929a3]'>
              <FaXmark />
            </button>
          </div>

          <div className='flex flex-col gap-4 pt-0 p-6'>
            <div className='flex flex-col gap-2'>
              <h3>Enter recipient’s email</h3>
              <p className='text-[#000929a3] text-sm'>Converse securely with applicants and landlords. Simply enter their emails and click the button below to get started.</p>
            </div>

            <label className='flex flex-col gap-2' htmlFor="email">
              Email
              <input
                type="email" 
                id="email" 
                name="email" 
                placeholder="hi@example.com"
                onChange={(e) => {
                  if(e.target.value.length > 0){
                    setFilled(true)
                  } else {
                    setFilled(false)
                  }
                }}
                required
                className='border-[#E0DEF7] bg-[#F7F7FD] p-4 text-[#000929a3] rounded-lg w-full outline-none focus:border-[#7065F0] focus:ring-1 focus:ring-[#7065F0]'
              />
            </label>

            <button
              disabled={filled ? false: true}
              type="submit"
              className={`bg-[#7065F0] text-white px-4 py-3 rounded-lg w-full ${filled ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}>
              Start a conversation
            </button>
            {there ? <p className='text-red-500'>No user found with that email.</p> : null}
          </div>
          

        </form>
      </section>
      
      : null}
    </>
  )
}

export default NewMessageModal