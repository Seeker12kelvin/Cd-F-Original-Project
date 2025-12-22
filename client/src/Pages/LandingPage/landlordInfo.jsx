import React from 'react'

const LandlordInfo = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 bg-linear-to-b from-[#F7F7FD] to-[#F7F7FD] p-50 pt-20 pb-20 max-sm:p-5 max-sm:pb-15 max-sm:text-center'>
      <span className='text-[#7065F0] text-2xl font-bold'>No Spam Promise</span>
      <h2 className='text-[#000929] font-bold text-[2.5rem]  max-sm:text-[2rem]'>Are you a landlord?</h2>
      <p className='text-[1rem] font-normal opacity-50 max-sm:w-[90%]'>Discover ways to increase your home's value and  get listed. No Spam.</p>

      <form className='flex items-center gap-4 w-[50%] bg-[white] rounded-lg p-4 max-sm:flex-col max-sm:bg-transparent max-sm:w-full'>
        <input
          id="email" 
          type="email" 
          required 
          className='w-full outline-none max-sm:bg-white max-sm:p-4 max-sm:rounded-xl' 
          placeholder='Enter your email address'/>
        <button
          type="submit"
          className='bg-[#7065F0] text-white rounded-lg p-3 pl-10 pr-10 w-fit max-sm:w-full'
          >
            Submit
          </button>
      </form>

      <p className='text-sm font-medium'>Join <span className='text-[#7065F0]'>10,000+</span> other landlords in our estatery community.</p>
    </section>
  )
}

export default LandlordInfo