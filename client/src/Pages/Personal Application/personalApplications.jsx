import React, { useMemo } from 'react'
import './personalApplications.module.css'
import { useParams } from 'react-router-dom'
import properDetails from '../../data/data'
import Squares from "../../Images/Square-Meters-Outline.png";
import { FaBath, FaBed } from 'react-icons/fa';

const PersonalApplications = () => {

  const { id } = useParams()
  
  const details = useMemo(
    () => properDetails.find(item => item.id == id),
    [id]
  )

  return (
    <>

      <div className='border-b border-[#F0EFFB] w-full flex justify-center pb-8 mb-8'>
        <div className='w-170 h-40 flex gap-4 shadow-xl rounded-lg border-[#F0EFFB] border-[0.09375rem] '>
          <img className='w-[35%] object-cover rounded-l-lg' src={details.imgUrl} alt={`A picture of ${details.name}`} />

          <div className='self-center w-[65%]'>
            <div className='flex flex-col gap-1 border-b mb-2 pb-2 border-[#F0EFFB]'>
              <h3 className='text-[#7065F0] text-[1rem] font-bold'>{details.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
              <h3 className='font-bold text-lg'>{details.name}</h3>
              <p className='text-[#6C727F] text-[0.86em]'>{details.location}</p>
            </div>
            <div className='flex gap-3 self-center bg-[white]'>
              <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {details.beds} Beds</p>
              <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {details.bathrooms} Bathrooms</p>
              <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {details.squareFeet}</p>
            </div>
          </div>
        </div>
      </div>

      <section className='w-170 h-fit'>
        <h2 className='text-[#000929] text-2xl font-bold'>Personal Details</h2>
        <p className='text-[#6C727F] text-[1rem]'>Please start your profile below by filling in your personal information </p>

        <form className='border border-[#E0DEF7] rounded-lg p-4'>
          <h3>Applicant Details</h3>
          <div>
            <input type='select'/>
            <input type='text' placeholder='Full name' />
          </div>
        </form>
      </section>
    </>
  )
}

export default PersonalApplications