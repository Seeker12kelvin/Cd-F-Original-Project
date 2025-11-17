import React from 'react'
import properDetails from '../../data/data.js'
import Squares from "../../Images/Square-Meters-Outline.png"
import { FaBath} from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

const Rent = () => {
  
  return (
    <>
      <div className='flex flex-col h-full w-screen items-center gap-12 pt-15 bg-[#F7F7FD]'>
        <div className='flex items-center justify-between w-[67%]'>
          <h1 className='text-4xl font-bold'>Search properties to rent</h1>
          <select className='bg-[white] border-[#E0DEF7] text-[#100A55] outline-none border p-2 rounded-xl'>
            <option disabled>Search with search Bar</option>
            <option>Search with search Bar</option>
          </select>
        </div>

        <div className='bg-white flex gap-10 p-7 rounded-xl'>
          <ul className='flex gap-10'>
            <li className='flex flex-col border-r-2 border-[#D6DDEB] pr-9'>Location <span className='font-bold'>New York, USA</span></li>
            <li className='flex flex-col border-r-2 border-[#D6DDEB] pr-9'>When 
              <span className='font-bold'>Select Move-in Date</span></li>
            <li className='flex flex-col border-r-2 border-[#D6DDEB] pr-9'>Price <span className='font-bold'>$500-$2500</span></li>
            <li className='flex flex-col border-r-2 border-[#D6DDEB] pr-9'>Property Type <span className='font-bold'>Houses</span></li>
          </ul>
          <button className='bg-[#7065F0] text-white p-4 pl-8 pr-8 rounded-2xl'>Search</button>
        </div>

        <div className='flex justify-center h-full w-[88%] flex-wrap gap-8'>
          {properDetails.map(data => {
            return (
              <div
                key={data.name}
                className='p-4 bg-white w-[300px] shadow-xl shadow-[#00000010] rounded-xl border-[#D6DDEB] border-2 flex flex-col gap-6'>
      
                <img className='rounded-xl object-cover' src={data.imgUrl} alt={data.name}/>
      
                <div className='border-b border-[#F0EFFB] pb-3 flex items-center justify-between'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-[#7065F0] text-xl font-bold'>{data.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                    <h3 className='font-bold text-xl'>{data.name}</h3>
                    <p className='text-[#6C727F] text-[0.86em]'>{data.location}</p>
                  </div>
                  <div className='border-2 border-[#F0EFFB] p-1 -mt-15 rounded-[50%] w-fit'>
                    <CiHeart className='text-[#7065F0] text-2xl '/>
                  </div>
                </div>
      
                <div className='flex gap-3'>
                  <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {data.beds} Beds</p>
                  <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {data.bathrooms} Bathrooms</p>
                  <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {data.squareFeet}</p>
                </div>
      
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Rent