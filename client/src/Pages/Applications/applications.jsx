import React, { useContext, useState } from 'react';
import "./application.module.css"
import { FaAngleDown, FaCalendar, FaCalendarAlt, FaCheckCircle, FaDotCircle, FaFilePdf, FaRegCalendarAlt, FaSearch } from 'react-icons/fa';
import { FaRegAddressBook } from "react-icons/fa6";
import { useLocation, Link } from 'react-router-dom';
import properDetails from '../../data/data';
import User from '../../components/User';

const Applications = () => {

  const { userProfilePic, setUserProfilePic } = useContext(User)
  const { name, email } = useLocation().state

  const firstName = name.split(' ')[0]
  const lastName = name.split('') === 1 ? name.split(' ')[1]: name.split('') === 3 ? name.split('')[2]: name.split(' ')[2]

  const [searchFilter, setSearchFilter] = useState(name)
  
  const handleChange = (e) => {
    setSearchFilter(e.target.value)
  }

  return (
    <div className='p-10 pt-5 flex justify-between items-start gap-4'>
      <div className='w-[66%] flex flex-col gap-6'>

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
                          className='border-[0.09375rem] border-[0.09375rem]-[#E0DEF7] items-center flex gap-2 rounded-xl p-2 pr-4 pl-4'><FaRegAddressBook /> 
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

      <div className='w-[34%] h-fit pt-0 p-6 rounded-xl'>
        <div className='flex items-start h-full justify-between'>
          <h3 className='text-xl font-bold text-[#000929]'>Rental Application</h3>
          <button className='flex gap-2 text-white bg-[#7065F0] p-3 items-center rounded-xl'><FaFilePdf />Export as PDF</button>
        </div>

        <div className='mt-4 border-[0.09375rem] border-[#E0DEF7] p-4 rounded-xl'>
          <div className='flex flex-col items-center'>
            {userProfilePic ? 
            <img src={userProfilePic} 
              className='w-30 h-30 object-cover rounded-full'
              alt='user profile picture'/>
            : 
            <div><input onChange={(e) => setUserProfilePic(e.target.files[0])} type='file' accept='/image/jpeg, image/png'/></div>}

            <h2 className='text-xl font-bold'>{firstName} {lastName}</h2>
            <p className='text-lg text-[#00092953]'>Houston, TX</p>
          </div>
          
          <div className='flex flex-col gap-5'>
            <div className='border-b border-[#E0DEF7] text-[black] pb-7'>
              <button 
                className='bg-[#E8E6F9] p-2 rounded-xl mt-4 w-full'>518 ..... <span className='text-[#7065F0]'>Show SSN</span></button>
            </div>
            <p className='w-full text-[#00092953] flex justify-between items-center border-b border-[#E0DEF7] pb-5'>Date of Birth <input className='text-[#000929]' type="date" /></p>
            <p className='w-full text-[#00092953] flex justify-between items-center border-b border-[#E0DEF7] pb-5'>Age <input className='text-[#000929]' type="number" placeholder='Your age'/></p>
            <p className='w-full text-[#00092953] flex justify-between items-center border-b border-[#E0DEF7] pb-5'>Email <span className='text-[#000929]'>{email}</span></p>
            <p className='w-full text-[#00092953] flex justify-between items-center border-b border-[#E0DEF7] pb-5'>Phone Number <input className='text-[#000929]' type="number" placeholder='Phone number'/></p>
            
            <div className='border-[0.09375rem] border-[#E0DEF7] p-4 rounded-xl'>
              <div className='flex justify-between border-b-2 pb-4 border-[#E0DEF7] items-center mb-4'>
                <p className='text-[#394150] text-[1em] flex flex-col'>Total Income <span className='text-[#000929] text-lg font-bold'>$4,500/mo</span></p>
                <p className='text-[#394150] text-[1em] flex flex-col pl-10 border-[#E0DEF7] border-l-2'>Income to Rent <span className='text-[#000929] text-lg font-bold'>2.3X</span></p>
              </div>
              <div className='flex justify-between items-center mb-4'>
                <p className='text-[#394150] text-[1em] flex flex-col'>Occupants <span className='text-[#000929] text-lg font-bold'>1 person</span></p>
                <p className='text-[#394150] text-[1em] flex flex-col pl-10 border-[#E0DEF7] border-l-2'>Move-in Date <span className='text-[#000929] text-lg font-bold'>Dec 18, 2021</span></p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 p-4 border-[0.09375rem] border-[#E0DEF7] rounded-xl mt-6'>
            <h2 className='text-lg font-bold'>Personal Reference</h2>
            <p className='text-[1em]'>"He always pays rent on time"</p>
            <div className='flex items-center gap-4 mt-4'>
              <img src={userProfilePic} 
              className='w-15 h-15 object-cover rounded-full float-left'
              alt='user profile picture'/> 
              <div className='flex flex-col'>
                <p className='font-bold text-[1em] flex items-center gap-4'>{firstName} <span className='text-[#27AE60] text-xs flex items-center gap-1'><FaCheckCircle /> IDENTITY VERIFIED</span></p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Applications