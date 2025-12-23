import React from 'react'

const MoreFilters = () => {
  return (
    <aside className='z-50 fixed w-[51.2%] h-full right-0 bg-[#0000006c]'>
      <section className='bg-[white] w-[60%] ml-auto h-full p-10 flex flex-col gap-5'>
        <h2 className='text-2xl text-[#000929] font-bold'>More Filters</h2>
        
        <div className='flex flex-col gap-3'>
          <h3 className='font-medium'>Category</h3>
          <ul className='flex items-center gap-4 border-[#F0EFFB] border-b pb-6'>
            <li><button className={`p-3 pl-4 pr-4 rounded-xl text-white bg-[#7065F0] border border-[#F0EFFB]`}>Houses</button></li>
            <li><button className={`p-3 pl-4 pr-4 rounded-xl text-white bg-[#7065F0] border border-[#F0EFFB]`}>Rooms</button></li>
            <li><button className={`p-3 pl-4 pr-4 rounded-xl text-white bg-[#7065F0] border border-[#F0EFFB]`}>Apartment</button></li>
          </ul>

          <h3>Price Range</h3>
          <input
            className='border-[#F0EFFB] border-b pb-6'
            type="range"/>

        </div>
      </section>
    </aside>
  )
}

export default MoreFilters