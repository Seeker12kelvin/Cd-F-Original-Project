import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import properDetails from '../../../data/data'
import { FaBath, FaBed, FaCheckCircle, FaHome, FaLessThan, FaPaintBrush, FaReadme, FaSearch, FaSquare, FaVideo } from 'react-icons/fa'
import { CiHeart, CiShare2 } from 'react-icons/ci'

const RentDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const details = properDetails.filter(data => data.id === id)

  console.log(id)
  
  return (
    <div className='p-20 pt-30 flex flex-col gap-10'>
      <button
        onClick={() => navigate(-1)}
        className='flex items-center gap-2 text-[#7065F0]'><FaLessThan /> 
        Back to map
      </button>

      {details.map(data => {
        return(
          <>
            <div key={data.id}>
              <h1 className='text-[2.5em]'>{data.name}</h1>
              <div className='flex justify-between items-center'>
                <p className='text-[#0009299a]'>
                  {data.location}
                </p>

                <div className='text-[#7065F0] flex items-center gap-4'>
                  <button className='flex items-center gap-2 p-3 pl-6 pr-6 rounded-xl bg-[#F7F7FD] border-[#E0DEF7] border-2'><CiShare2 /> Share</button>
                  <button className='flex items-center gap-2 p-3 pl-6 pr-6 rounded-xl bg-[#F7F7FD] border-[#E0DEF7] border-2'><CiHeart /> Favorite</button>
                  <button className='flex items-center gap-2 p-3 pl-6 pr-6 rounded-xl bg-[#F7F7FD] border-[#E0DEF7] border-2'><FaSearch /> Browse nearby listings</button>
                </div>
              </div>
            </div>

            <div className='w-full object-cover h-fit flex justify-between gap-6'>
              <img className='w-[65%] rounded-xl' src={data.imgUrl} alt={`A picture of ${data.name}`}/>
              <div className='w-[35%] h-full flex flex-col gap-6'>
                <img className='rounded-xl' src={data.imgUrl} alt={`A picture of ${data.name}`}/>
                <img className='rounded-xl' src={data.imgUrl} alt={`A picture of ${data.name}`}/>
              </div>
            </div>

            <div className='flex justify-between gap-8'>

              <div className='w-[65%] flex flex-col gap-10'>
                <div className='flex w-full items-center justify-around p-6 rounded-xl border-2 border-[#F0EFFB]'>

                  <div className='flex flex-col gap-3'>
                    <p className='text-[#0009297e]'>Bedrooms</p>
                    <p className='flex items-center text-[1.1em] gap-2'><FaBed />{data.beds}</p>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <p className='text-[#0009297e] text-[1em]'>Bathrooms</p>
                    <p className='flex items-center text-[1.1em] gap-2'><FaBath />{data.bathrooms}</p>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <p className='text-[#0009297e] text-[1em]'>Square Area</p>
                    <p className='flex items-center text-[1.1em] gap-2'><FaSquare />{data.beds}</p>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <p className='text-[#0009297e] text-[1em]'>Repair Quality</p>
                    <p className='flex items-center text-[1.1em] gap-2'><FaPaintBrush/>Modern Loft</p>
                  </div>

                  <div className='flex flex-col gap-3'>
                    <p className='text-[#0009297e] text-[1em]'>Status</p>
                    <p className='flex items-center text-[1.1em] gap-2'><FaCheckCircle />Active</p>
                  </div>
    
                </div>

                <div className='flex flex-col gap-5'>
                  <h3 className='text-2xl text-[#000929] font-bold'>About this home</h3>
                  <p className='text-[1em] font-light tracking-wider leading-7'>{data.description}</p>
                </div>
              </div>

              <div className='flex flex-col gap-4 p-6 border-2 border-[#F0EFFB] rounded-xl w-[33%]'>
                <div className='flex flex-col gap-2'>
                  <p className='text-[#0009297e] text-sm'>Rent price</p>
                  <h3 className='text-[#7065F0] text-2xl font-bold'>{data.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                </div>
                <button className='bg-[#7065F0] text-white p-4 pl-8 pr-8 flex items-center justify-center gap-2 rounded-xl w-full'><FaReadme /> Apply now</button>

                <hr className='border-[#F0EFFB] border mt-3'/>

                <h3>Request a home tour</h3>

                <div className='flex items-center gap-2'>
                  <button 
                    className='w-full justify-center border-[#F0EFFB] border-2 rounded-xl flex items-center gap-2 p-3 pl-6 pr-6 active:text-[#7066F0] active:border-[#7066F0]'><FaHome /> In Person</button>
                  <button 
                    className='w-full justify-center border-[#F0EFFB] border-2 rounded-xl flex items-center gap-2 p-3 pl-6 pr-6 active:text-[#7066F0] active:border-[#7066F0]'><FaVideo /> Virtual</button>
                </div>
              </div>

            </div>
          </>
        )
      })}
    </div>
  )
}

export default RentDetails