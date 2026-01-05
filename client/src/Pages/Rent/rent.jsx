import React, { useContext } from 'react';
import './rent.module.css';
import { FaAngleDown} from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropertiesListData from '../../components/PropertiesListData/PropertiesListData.jsx';
import User from '../../components/User.jsx';

const Rent = () => {

  const { filteredProperties, handleSearch } = useContext(User)
  
  const ulListStyle = {li: 'flex flex-col border-r-2 border-[#D6DDEB] text-[1.2em] pr-13 text-[#0009294e]', span: 'font-bold text-[1em] text-black'}

  const ulLists = [
    {
      li: 'Location',
      span: 'New York'
    },
    {
      li: 'When',
      span: 'Select Move-in Date'
    },
    {
      li: 'Price',
      span: '$500-$2500'
    },
    {
      li: 'Property Type',
      span: 'Houses'
    }
  ]

  const numbers = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: '...'},
    {num: 10}
  ]
  
  return (
    <main className='flex flex-col h-full w-screen items-center gap-12 pt-30 pb-30 bg-[#F7F7FD]'>
      <section className='flex items-center justify-between w-[73%]'>
        <h1 className='text-[2.5em] font-bold'>Search properties to rent</h1>
        <div className='border-2 border-[#E0DEF7] bg-[#FFFFFF] rounded-xl flex items-center'>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            className='p-2 outline-none' 
            type="search" 
            placeholder='Search with searchBar' />
          <FaAngleDown className='mr-2'/>
        </div>
      </section>

      <section className='bg-white flex justify-center gap-5 p-6 w-[72%] rounded-xl'>
        <ul className='flex gap-10 justify-self-center items-center'>
          {ulLists.map(data => <li key={data.li} className={`${ulListStyle.li}`}>{data.li} <span className={`${ulListStyle.span}`}>{data.span}</span></li>)}
        </ul>
        <Link to={'search'} className='bg-[#7065F0] text-white p-4 pl-8 pr-8 rounded-xl'>Search</Link>
      </section>

      <section className='flex justify-center h-full w-[88.5%] flex-wrap gap-8'>
        {filteredProperties.length > 0 ?
          <PropertiesListData props={{filteredProperties}} />
        :<p>Not found...</p>}
      </section>

      <section className='flex items-center gap-4'>
        <FaLessThan />
        <ul className='flex items-center gap-4'>
          {numbers.map(data => {
            return(
              <li key={data.num} className='bg-white text-[#9EA3AE] w-7 h-7 rounded-[50%] flex items-center justify-center'>{data.num}</li>
            )
          })}
        </ul>
        <FaGreaterThan />
      </section>
    </main>
  )
}

export default Rent