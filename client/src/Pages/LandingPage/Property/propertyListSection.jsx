import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaKey, FaSearch } from 'react-icons/fa'
import styles from '../landingPage.module.css'
import PropertiesListData from '../../../components/PropertiesListData/PropertiesListData'
import User from '../../../components/User'

const PropertyListSection = () => {

  const { filteredProperties, handleSearch } = useContext(User)

  return (
    <section className='max-sm:p-5 max-sm:pt-30 max-sm:leading-12 max-sm:w-full p-50 pt-30 pb-30 leading-7 flex flex-col items-center bg-linear-to-b from-[#FFFFFF] to-[#F0EFFB]'>
      <div className='text-center mb-15'>
        <h1 className='text-[2.5rem] text-[#001619] font-bold mb-4'>Based on your location</h1>
        <p className='text-[#0009297c] text-[1rem] max-sm:leading-6'>Some our picked properties near your location.</p>
      </div>

      <div className='flex w-[97%] justify-between mb-10 items-center max-sm:flex-col max-sm:gap-6'>
        <ul className='max-sm:w-full bg-[#F0EFFB] flex items-center border-2 border-[#E0DEF7] p-2 pr-7 justify-between w-fit gap-10 text-[#100a5565] rounded-xl'>
          <li className='border-2 border-[#E0DEF7] bg-[white] rounded-xl w-fit flex items-center gap-2 p-2 pl-4 pr-4 text-[#7065F0]'> <FaKey /> Rent</li>
          <li>Buy</li>
          <li>Sell</li>
        </ul>

        <form role="search" className='flex items-center w-[30%] border-2 border-[#E0DEF7] bg-[#F7F7FD] p-3 rounded-lg text-[#00092973] gap-2 max-sm:w-full'>
          <label htmlFor="search" className='text-[#7065F0]'><FaSearch /></label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            className='outline-none w-full'
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
      </div>

      <div className={`${styles['no-scrollbar']} sm:flex-wrap flex justify-start gap-6 w-full h-200 overflow-hidden mb-10 max-sm:h-100 max-sm:overflow-scroll max-sm:gap-0`}>

        {filteredProperties.length > 0 ?
          <PropertiesListData />
        :<p>Not found...</p>}

      </div>
      <Link to={'/rent'} className='bg-[#100A55] p-2 text-white rounded-lg pl-6 pr-6 max-sm:w-[90%] max-sm:text-center'>Browse more properties</Link>
    </section>
  )
}

export default PropertyListSection