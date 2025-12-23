import React from 'react'
import '../rentSearch.module.css'
import { FaBath, FaBed } from 'react-icons/fa';
import Squares from "../../../../Images/Square-Meters-Outline.png";
import PropertiesListData from '../../../../components/PropertiesListData/PropertiesListData';

const PropertyList = ({properties, sor}) => {
  return (
    <div className={`flex w-full h-full overflow-scroll ${!sor ? 'flex-col gap-4': 'justify-around flex-wrap'}`}>
      {sor ?
        <PropertiesListData props={{properties}}/>
        :
        properties.map(data => (
          <div key={data.id} className='w-full h-40 flex gap-7 rounded-lg border-[#F0EFFB] border-[0.09375rem] '>
            <img className='w-[35%] object-cover rounded-l-lg' src={data.imgUrl} alt={`A picture of ${data.name}`} />

            <div className='self-center w-[65%]'>
              <div className='flex flex-col gap-1 border-b mb-2 pb-2 border-[#F0EFFB]'>
                <h3 className='text-[#7065F0] text-[1rem] font-bold'>{data.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                <h3 className='font-bold text-lg'>{data.name}</h3>
                <p className='text-[#6C727F] text-[0.86em]'>{data.location}</p>
              </div>
              <div className='flex gap-3 self-center bg-[white]'>
                <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {data.beds} Beds</p>
                <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {data.bathrooms} Bathrooms</p>
                <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {data.squareFeet}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PropertyList