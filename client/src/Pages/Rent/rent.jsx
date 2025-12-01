import React from 'react';
import './rent.module.css';
import properDetails from '../../data/data.js';
import Squares from "../../Images/Square-Meters-Outline.png";
import { favoriteDetails } from '../../data/data.js';
import FavoriteButton from '../../components/favoriteFunction.jsx';
import { FaBath} from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FaStarOfLife } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Rent = () => {
  
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
    {num: 4},
    {num: 5},
    {num: 6},
    {num: 7},
    {num: 8},
    {num: 9},
    {num: 10}
  ]
  
  return (
    <div className='flex flex-col h-full w-screen items-center gap-12 pt-30 pb-30 bg-[#F7F7FD]'>
      <div className='flex items-center justify-between w-[73%]'>
        <h1 className='text-[2.5em] font-bold'>Search properties to rent</h1>
        <select className='bg-[white] border-[#E0DEF7] text-[#100A55] outline-none border p-2 rounded-xl'>
          <option disabled>Search with search Bar</option>
          <option>Search with search Bar</option>
        </select>
      </div>

      <div className='bg-white flex justify-center gap-5 p-6 w-[72%] rounded-xl'>
        <ul className='flex gap-10 justify-self-center items-center'>
          {ulLists.map(data => <li className={`${ulListStyle.li}`}>{data.li} <span className={`${ulListStyle.span}`}>{data.span}</span></li>)}
        </ul>
        <button className='bg-[#7065F0] text-white p-4 pl-8 pr-8 rounded-xl'>Search</button>
      </div>

      <div className='flex justify-center h-full w-[88.5%] flex-wrap gap-8'>
        {properDetails.map(data => {
          return (
            <Link key={data.id} to={`/rent/${data.id}`}>
              <div
                className=' bg-white w-[330px] h-fit relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col'>
      
                <img className='object-cover rounded-xl rounded-b-none z-3 bg-[white] h-fit' src={data.imgUrl} alt={data.name}/>

                <div className='bg-white h-full w-full z-3 flex rounded-b-2xl gap-4 flex-col p-6'>
      
                  <div className='border-b border-[#F0EFFB] pb-2 flex bg-[white] h-full items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[#7065F0] text-xl font-bold'>{data.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                      <h3 className='font-bold text-2xl'>{data.name}</h3>
                      <p className='text-[#6C727F] text-[0.86em]'>{data.location}</p>
                    </div>
                    <div className='border-2 border-[#F0EFFB] flex items-center p-1.5 -mt-10 rounded-[50%] w-fit'>
                      <FavoriteButton
                        className=''
                        isFavorite={favoriteDetails.some(item => item.id === data.id)}
                        onToggle={() => {
                          if (favoriteDetails.some(item => item.id === data.id)) {
                            const index = favoriteDetails.findIndex(item => item.id === data.id);
                            if (index > -1) {
                              favoriteDetails.splice(index, 1);
                            }
                          } else {
                            favoriteDetails.push(data);
                            localStorage.setItem('favorites', JSON.stringify(favoriteDetails));
                          }
                        }}
                        size={19}
                      />
                    </div>
                  </div>
        
                  <div className='flex gap-3 self-center bg-[white]'>
                    <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {data.beds} Beds</p>
                    <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {data.bathrooms} Bathrooms</p>
                    <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {data.squareFeet}</p>
                  </div>

                </div>

                {data.popular ? <><div 
                  className='bg-[#7065F0] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-42.5 -left-[0.704rem]'>
                  <FaStarOfLife />
                  <p>POPULAR</p>
                </div>
        
                <div
                  className='bg-[#5245ED] h-10 rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center absolute top-52 -left-[0.704rem]'>
                </div></>: null}

              </div>
            </Link>
          )
        })}
      </div>

      <div className='flex items-center gap-4'>
        <FaLessThan />
        {numbers.map(data => {
          return(
            <div key={data.num} className='bg-white text-[#9EA3AE] w-7 h-7 rounded-[50%] flex items-center justify-center'>{data.num}</div>
          )
        })}
        <FaGreaterThan />
      </div>
    </div>
  )
}

export default Rent