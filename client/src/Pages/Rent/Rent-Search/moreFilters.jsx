import React, { useContext, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styles from './rentSearch.module.css'
import User from '../../../components/User'

const MoreFilters = () => {

  const { setMoreFilters, more } = useContext(User)

  const [bedroom, setBedroomCount] = useState(0)
  const [bathroom, setBathroomCount] = useState(0)
  const [btn, setBtn] = useState('')
  const [anim, setAnim] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    more(btn, bedroom, bathroom)
    // Will add the price range and rental period logic soon
    setTimeout(() => {
      setMoreFilters(prev => !prev)
    }, 300)
    setAnim(prev => !prev)
  }

  return (
    <aside aria-live='More filters' className={`z-50 absolute w-[51.2%] h-fit right-0 bg-[#0000006c]`}>
      <form onSubmit={handleSubmit} className={`bg-[white] ${anim ? styles['animate-out']: ''} ${styles['animate-in']} w-[60%] ml-auto -mt-10 h-full overflow-y-scroll p-15 pb-20 flex flex-col gap-5`}>
        <h2 className='text-2xl text-[#000929] font-bold'>More Filters</h2>
        
        <div className='flex flex-col gap-3'>
          <h3 className='text-[1rem] font-bold text-[#000929]'>Category</h3>
          <ul className='flex items-center gap-4 border-[#F0EFFB] border-b pb-6'>
            <li>
              <button
                type="button"
                value={'Houses'}
                onClick={(e) => setBtn(e.target.value)}
                className={`p-2 pl-4 pr-4 rounded-xl text-white bg-[#7065F0] border border-[#F0EFFB]`}>
                  Houses
              </button>
            </li>
            <li>
              <button
                type="button"
                value={'Rooms'}
                onClick={(e) => setBtn(e.target.value)}
                className={`p-2 pl-4 pr-4 rounded-xl text-white bg-[#7065F0] border border-[#F0EFFB]`}>
                  Rooms
              </button>
            </li>
            <li>
              <button
                type="button"
                value={'Apartments'}
                onClick={(e) => setBtn(e.target.value)}
                className={`p-2 pl-4 pr-4 rounded-xl text-white bg-[#7065F0] border border-[#F0EFFB]`}>
                  Apartment
              </button>
            </li>
          </ul>
        </div>

        <div className='border-[#F0EFFB] border-b pb-6'>
          <h3 className='text-[1rem] font-bold text-[#000929]'>Price Range</h3>
          <input
            className=''
            type="range"
            name='price'/>
        </div>

        <div className='flex flex-col gap-4 border-[#F0EFFB] border-b pb-6'>
          <h3 className='text-[1rem] font-bold text-[#000929]'>Features</h3>
          <ul className='flex flex-col gap-4'>
            <li className='flex justify-between items-center'>
              Bedroom
              <span className='flex items-center gap-4'>
                <button
                  type="button"
                  className={`text-white text-lg rounded-full ${bedroom === 0 ? 'bg-[#8080803b]':'bg-[#7065F0]'} pl-2 pr-2 h-fit w-fit`}
                  disabled={bedroom === 0 ? true : false} onClick={() => setBedroomCount(prev => --prev)}>-</button>
                <strong>{bedroom}</strong>
                <button
                  type="button"
                  className='text-white text-lg rounded-full bg-[#7065F0] pl-2 pr-2 h-fit w-fit'
                  onClick={() => setBedroomCount(prev => ++prev)}>+</button>
              </span>
            </li>
            <li className='flex justify-between items-center'>
              Bathroom
              <span className='flex items-center gap-4'>
                <button
                  type="button"
                  className={`text-white text-lg rounded-full ${bathroom === 0 ? 'bg-[#8080803b]':'bg-[#7065F0]'} pl-2 pr-2 h-fit w-fit`}
                  disabled={bathroom === 0 ? true : false} onClick={() => setBathroomCount(prev => --prev)}>-</button>
                <strong>{bathroom}</strong>
                <button
                  type="button"
                  className='text-white text-lg rounded-full bg-[#7065F0] pl-2 pr-2 h-fit w-fit'
                  onClick={() => setBathroomCount(prev => ++prev)}>+</button>
              </span>
            </li>
          </ul>
        </div>

        <div className='border-[#F0EFFB] border-b pb-6 flex flex-col gap-4'>
          <h3 className='text-[1rem] font-bold text-[#000929]'>Rental Period</h3>
          <label
            className='flex items-center gap-4'
            htmlFor='Any'>
            <input
              id='Any'
              value='Any'
              type="radio" 
              name='rental-period' 
              className={`${styles['personal-input']} p-4 rounded-xl`} />
            Any
          </label>
          <label
            className='flex items-center gap-4'
            htmlFor='1-12months'>
            <input
              id='1-12months'
              value='1-12months' 
              type="radio" 
              name='rental-period' 
              className={`${styles['personal-input']} p-4 rounded-xl`} />
            1-12 months
          </label>
          <label
            className='flex items-center gap-4'
            htmlFor='13-24months'>
            <input
              id='13-24months'
              value='13-24months' 
              type="radio" 
              name='rental-period' 
              className={`${styles['personal-input']} p-4 rounded-xl`} />
            13-24 months
          </label>
          <label
            className='flex items-center gap-4'
            htmlFor='24+months'>
            <input
              id='24+months'
              value='24+months' 
              type="radio" 
              name='rental-period' 
              className={`${styles['personal-input']} p-4 rounded-xl`} />
            24 + months
          </label>
        </div>

        <div className='w-full flex items-center justify-between gap-4'>
          <button
            type="reset"
            className='text-[#7065F0] p-4 w-full bg-[#F7F7FD] rounded-xl'
          >Reset</button>
          <button
            type="submit"
            className='text-white p-4 w-full bg-[#7065F0] rounded-xl'
          >Apply</button>
        </div>
      </form>
    </aside>
  )
}

export default MoreFilters