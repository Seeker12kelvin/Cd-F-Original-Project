import React, { useContext, useState } from 'react'
import PropertyList from './propertyList'
import { RiExpandUpDownLine } from 'react-icons/ri'
import { FaAngleDown, FaFilter, FaGreaterThan, FaList, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BsFillGridFill } from 'react-icons/bs'
import User from '../../../../components/User'
import { FaFilterCircleDollar, FaFilterCircleXmark } from 'react-icons/fa6'
import { CiFilter } from 'react-icons/ci'
import MoreFilters from '../moreFilters'

const SearchProperty = ({filt, sor, setBtnTouch, styleOne, styleTwo, setSor, btntouch, proper}) => {

  const { handleSearch, setMoreFilters, moreFilters } = useContext(User)

  const [filterBox, setFilterBlock] = useState(false)

  return (
    <>
      <section className='flex flex-col h-full w-full p-8 pb-0 gap-5'>
        <nav>
          <ul className='flex items-center gap-2'>
            <li><NavLink style={({isActive}) => isActive ? styleOne : {color: '#100a5575'}} to='/rent'>Home</NavLink></li>
            <li><FaGreaterThan /></li>
            <li><NavLink style={({isActive}) => isActive ? styleTwo : {color: '#100a5575'}} to='/rent/search'>Search</NavLink></li>
          </ul>
        </nav>

        <h2 className='text-[#100A55] text-[2rem]'>Search Properties</h2>
        <p className='text-[#100A55] opacity-70 -mt-6'>{proper.length} properties available to rent</p>

        <form className='flex items-center gap-4'>
          <label htmlFor='search' className='border-[#E0DEF7] border-[0.09375rem] rounded-lg bg-[#F7F7FD] flex items-center gap-2 p-4 w-[78%]'>
            <FaSearch  className='text-[#7065F0]'/>
            <input
              id='search'
              onChange={(e) => handleSearch(e.target.value)}
              type="search" placeholder='Search...' className='outline-none w-full' />
          </label>
          <button
            onClick={() => setMoreFilters(prev => !prev)}
            type="button"
            className='bg-[#7065F0] flex items-center gap-2 rounded-lg text-white w-fit pr-3 pl-3 h-full'><CiFilter/> More filters</button>
        </form>

        <div className='flex items-center justify-between w-full'>
          <ul className='flex items-center gap-5'>
            <li>
              <button className='border-[#E0DEF7] border-[0.09375rem] p-3 bg-transparent rounded-lg flex items-center gap-2'>Any Price 
              <RiExpandUpDownLine className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            </li>

            <li>
              <button onClick={() => {
              filt('2')
              setBtnTouch(prev => !prev)
              }} className={`${btntouch ? 'border-[#7065F0] border-[0.09375rem] bg-[#E8E6F9] text-[#7065F0]': 'border-[#E0DEF7] bg-transparent border-[0.09375rem]'} p-3 rounded-lg flex items-center gap-2`}>2-4 Beds 
              <RiExpandUpDownLine className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            </li>

            <li>
              <button className='border-[#E0DEF7] border-[0.09375rem] p-3 bg-transparent rounded-lg flex items-center gap-2'>All Types 
              <RiExpandUpDownLine className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            </li>

            <li>
              <button
                onClick={() => setFilterBlock(prev => !prev)}
                className='border-[#E0DEF7] border-[0.09375rem] p-3 bg-transparent rounded-lg flex items-center gap-2'>Newest 
              <FaAngleDown className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            </li>
          </ul>
            
            {/* <select>
              <option></option>
            </select> */}
            
          <div className='flex items-center justify-between w-[12%] text-2xl'>
            <button
              onClick={() => setSor(prev => !prev)}
              className={`${!sor ? 'border-[#E0DEF7] text-[#7065F0] border-[0.09375rem] p-2 bg-transparent rounded-lg' : 'text-[#100A55]'}`}>
              <FaList />
            </button>
            
            <button
              onClick={() => setSor(prev => !prev)}
              className={`${!sor ? 'text-[#100A55]' : 'border-[#E0DEF7] text-[#7065F0] border-[0.09375rem] p-2 bg-transparent rounded-lg'}`}>
              <BsFillGridFill />
            </button>
            
          </div>
        </div>
        
        <PropertyList properties={proper} sor={sor} />
      </section>

      {moreFilters ? <MoreFilters />: null}
    </>
  )
}

export default SearchProperty