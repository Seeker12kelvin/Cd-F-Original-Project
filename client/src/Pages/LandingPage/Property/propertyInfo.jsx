import React from 'react'
import Illustrations from '../../../Images/Illustration.png';

const PropertyInfo = () => {
  return (
    <section className='max-sm:flex max-sm:justify-center max-sm:w-full'>
      <div className='bg-[#F7F7FD] border-[0.09375rem] border-[#E0DEF7] w-fit rounded-xl p-5 flex flex-col gap-10'>
        <div>
          <h2 className='text-2xl'>The new way to find your new home</h2>
          <p>Find your dream place to live in with more than 10k+ properties listed.</p>
          <button className='bg-[#100A55] p-2 pr-4 pl-4 text-white rounded-xl'>Browse Properties</button>
        </div>
        <img className='w-30 h-30 self-end' src={Illustrations} alt='Illustration of a house' />
      </div>
    </section>
  )
}

export default PropertyInfo