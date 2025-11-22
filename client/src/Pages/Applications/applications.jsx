import React, { useState } from 'react';
import { FaAngleDown, FaCalendar, FaCalendarAlt, FaDotCircle, FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import { FaRegAddressBook } from "react-icons/fa6";
import { useLocation, Link } from 'react-router-dom';
import properDetails from '../../data/data';

const Applications = () => {

  const { name } = useLocation().state

  const [searchFilter, setSearchFilter] = useState(name)
  
  const handleChange = (e) => {
    setSearchFilter(e.target.value)
  }

  return (
    <div className='p-10 pt-5'>
      <div className='w-[70%] flex flex-col gap-6'>

        <div className='flex items-center justify-between gap-2 border-[#E0DEF7] border rounded-xl p-2 pr-4 pl-4'>
          <p className='flex items-center gap-2'>All Applications <FaAngleDown /></p>
        
          <div className='flex items-center gap-2 w-[50%]'>
            <div className='outline-none rounded-xl pl-2 pr-2 bg-[#F7F7FD] w-full flex items-center gap-2'>
              <FaSearch className='text-[#7065F0]' />
              <input 
                className='outline-none rounded-xl p-2 w-full'
                type='text' 
                value={'Search applications'} 
                placeholder='Search for properties, application, etc.'
                onChange={handleChange}/>
            </div>
            <div className='w-60 flex items-center justify-center gap-2 border-[#E0DEF7] border rounded-xl p-2 pl-2 pr-2'>
              <FaRegCalendarAlt />
              <p>1 Dec - 31 Dec</p>
            </div>
          </div>
          
        </div>
        
        <div className='border-[#E0DEF7] border rounded-xl'>
          <div className='border-[#E0DEF7] border-b pb-2'>
            <ul className='flex items-center gap-10 w-full p-4'>
              <li className='border-r border-[#E0DEF7] pr-20 flex flex-col text-[#6C727F]'>Overview <span className='text-[#000929]'>Last 30 days</span></li>
              <li className='border-r border-[#E0DEF7] pr-20 flex flex-col text-[#6C727F]'>Total Applications <span className='text-[#000929]'>12</span></li>
              <li className='border-r border-[#E0DEF7] pr-20 flex flex-col text-[#6C727F]'>Applications Fee <span className='text-[#000929]'>$3,600</span></li>
              <li className='flex flex-col text-[#6C727F]'>Total Response <span className='text-[#000929]'>3 <span className='text-[#27AE60] text-[0.7em] bg-[#ffb25454] p-2 rounded-4xl w-fit'>25%</span> </span></li>
            </ul>
          </div>

          <div className='border-[#E0DEF7] border-b p-4'>
            <div className='bg-[#F7F7FD] w-full flex items-center gap-40 rounded-xl font-bold text-[1em] p-4'>
              <p>Date</p>
              <p>Property</p>
            </div>

            <div className='w-full flex flex-col gap-4 text-[1em]'>
              {properDetails.map(data => {
                return(
                  <Link key={data.id} to={`/rent/${data.id}`} className='active:bg-[#F0EFFB]'>
                    <div className='flex gap-4 p-4 justify-between pb-5 items-center border-b-2 border-[#E0DEF7]'>
                      <p>{data.boughtItemdate}</p>

                      <div className='flex gap-4 items-center'>
                        <img className='h-14 object-cover w-20 rounded-xl' src={data.imgUrl} alt={`${data.name}`}/>
                        <div>
                          <p className='font-bold'>{data.name}</p>
                          <p className='flex items-center gap-2 text-[#6C727F]'>{data.userName} <div className='w-1 h-1 rounded-full bg-[#9EA3AE]'></div> {data.location}</p>
                        </div>
                      </div>

                      
                      
                        <button 
                          className='border-2 border-[#E0DEF7] items-center flex gap-2 rounded-xl p-2 pr-4 pl-4'><FaRegAddressBook /> 
                          View detail
                        </button>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=''>

      </div>
    </div>
  )
}

export default Applications