import React, { useState } from 'react'
import styles from './rentSearch.module.css'
import PoiMarkers from '../../../components/PoiMakers'
import {Map} from '@vis.gl/react-google-maps';
import properDetails, { favoriteDetails } from '../../../data/data';
import { FaAngleDown, FaBath, FaBed, FaGreaterThan, FaList, FaSearch } from 'react-icons/fa';
import Squares from "../../../Images/Square-Meters-Outline.png";
import { Link, NavLink } from 'react-router-dom';
import { BsFillGridFill } from 'react-icons/bs';
import { RiExpandUpDownLine } from "react-icons/ri";
import FavoriteButton from '../../../components/favoriteFunction';

const RentSearch = () => {

  const isStyle = {
    color: '#100A55'
  }

  const isStyleTwo = {
    color: '#100A55'
  }

  const [properties, setProperties] = useState(properDetails)
  const [touch, setTouch] = useState(false)
  const [sort, setSort] = useState(false)

  const filtered = (filt) => {
    setProperties(properDetails)
    if(!touch){
      const filter = properties.filter(data => data.bathrooms >= filt)
      setProperties(filter);
    }
  }

  const handleSearch = (searchVal) => {
    const filtered = properDetails.filter((property) =>
      property.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      property.location.toLowerCase().includes(searchVal.toLowerCase())
    );
    setProperties(filtered);
  }

  return (
    <div className='flex mt-21 justify-between h-screen w-screen'>
      <div style={{ width: "100%", height: "100%" }}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultZoom={13}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          mapId={`64c959856ed0188a804d4ff1`}
        >
          <PoiMarkers />
        </Map>
      </div>

      <div className='flex flex-col h-full w-full p-10 gap-5'>

        <div className='flex items-center gap-2'>
          <NavLink style={({isActive}) => isActive ? isStyle : {color: '#100a5575'}} to='/rent'>Home</NavLink>
          <FaGreaterThan />
          <NavLink style={({isActive}) => isActive ? isStyleTwo : {color: '#100a5575'}} to='/rent/search'>Search</NavLink>
        </div>

        <div>
          <h2 className='text-[#100A55] text-[2rem]'>Search Properties</h2>
          <p className='text-[#100A55] opacity-70'>{properDetails.length} properties available to rent</p>
        </div>

        <div className='flex items-center gap-5'>
          <div className='border-[#E0DEF7] border-[0.09375rem] rounded-lg bg-[#F7F7FD] flex items-center gap-2 p-4 w-[78%]'>
            <FaSearch  className='text-[#7065F0]'/>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="search" placeholder='Search...' className='outline-none w-full' />
          </div>
          <button className='bg-[#7065F0] rounded-lg text-white w-fit pl-4 pr-4 p-4'>+ More filters</button>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-5'>
            <button className='border-[#E0DEF7] border-[0.09375rem] p-3 bg-transparent rounded-lg flex items-center gap-2'>Any Price 
              <RiExpandUpDownLine className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            <button onClick={() => {
              filtered('2')
              setTouch(prev => !prev)
              }} className={`${touch ? 'border-[#7065F0] border-[0.09375rem] bg-[#E8E6F9] text-[#7065F0]': 'border-[#E0DEF7] bg-transparent border-[0.09375rem]'} p-3 rounded-lg flex items-center gap-2`}>2-4 Beds 
              <RiExpandUpDownLine className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            <button className='border-[#E0DEF7] border-[0.09375rem] p-3 bg-transparent rounded-lg flex items-center gap-2'>All Types 
              <RiExpandUpDownLine className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
            <button className='border-[#E0DEF7] border-[0.09375rem] p-3 bg-transparent rounded-lg flex items-center gap-2'>Newest 
              <FaAngleDown className='border-[#E0DEF7] border-[0.09375rem] bg-[#E8E6F9] rounded-full' /></button>
          </div>
          <div className='flex items-center justify-between w-[12%] text-2xl'>
            <button
              onClick={() => setSort(false)}
              className={`${!sort ? 'border-[#E0DEF7] text-[#7065F0] border-[0.09375rem] p-2 bg-transparent rounded-lg' : 'text-[#100A55]'}`}>
              <FaList />
            </button>
            
            <button 
              onClick={() => setSort(prev => !prev)}
              className={`${!sort ? 'text-[#100A55]' : 'border-[#E0DEF7] text-[#7065F0] border-[0.09375rem] p-2 bg-transparent rounded-lg'}`}>
              <BsFillGridFill />
            </button>
            
          </div>
        </div>
        <div className={`flex ${!sort ? 'overflow-y-scroll flex-col gap-4': 'justify-around flex-wrap w-full'}`}>
          {properties.map(data =>
            sort ? (
              <Link key={data.id} to={`/rent/${data.id}`}>
                <div
                  className={`${styles['onLoad-animation']} bg-white w-[330px] h-fit relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col`}>
        
                  <img className='object-cover rounded-xl rounded-b-none z-3 bg-[white] h-48' src={data.imgUrl} alt={data.name}/>

                  <div className='bg-white h-full w-full z-3 flex rounded-b-2xl gap-4 flex-col p-6'>
        
                    <div className='border-b border-[#F0EFFB] pb-2 flex bg-[white] h-full items-center justify-between'>
                      <div className='flex flex-col gap-2'>
                        <h3 className='text-[#7065F0] text-xl font-bold'>{
                          data.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
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
              </Link>)
            :
              (
              <div key={data.id} className='w-170 h-40 flex gap-7 rounded-lg border-[#F0EFFB] border-[0.09375rem] '>
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
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default RentSearch