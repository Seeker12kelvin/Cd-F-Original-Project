import React, { useState } from 'react';
import styles from "./landingPage.module.css";
import { NavLink, Link } from 'react-router-dom';
import Squares from "../../Images/Square-Meters-Outline.png";
import PastBuyer from '../../Images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash 1.png';
import Logo from '../../components/Logo';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Illustrations from '../../Images/Illustration.png';
import { FaBath, FaBed, FaKey, FaReadme, FaSearch, FaStarOfLife, FaVideo } from 'react-icons/fa';
import properDetails, { favoriteDetails } from '../../data/data';
import FavoriteButton from '../../components/favoriteFunction';
import { FaHouseCircleCheck } from 'react-icons/fa6';
import landingImage1 from '../../Images/landing-image.png';

const LandingPage = () => {

  const active = true
  const [filteredProperties, setFilteredProperties] = useState(properDetails)
  
  const handleSearch = (searchValue) => {
    const filtered = properDetails.filter((property) =>
      property.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      property.location.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProperties(filtered);
  }

  const sectionData = [
    {
      icon: <FaVideo className='w-full h-full' />,
      iconStyle: 'bg-[#100A55] p-4 w-15 h-15 rounded-full place-content-center flex text-white',
      topic: 'Virtual home tour',
      description: 'You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.',
      style: 'w-fit p-5 leading-6 rounded-lg bg-[#ffffff3f] text-white'
    },
    {
      icon: <FaHouseCircleCheck className='bg-[#E8E6F9] w-full p-2 h-full rounded-full' />,
      iconStyle: 'border-[#E0DEF7] p-[0.2rem] w-15 h-15 border-2 w-10 flex place-content-center items-center h-10 text-[#7065F0] rounded-full',
      topic: 'Find the best deal',
      description: 'Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!',
      style: 'w-fit p-5 leading-6 rounded-lg bg-white text-black'
    },
    {
      icon: <FaReadme className='w-full h-full' />,
      iconStyle: 'border-2 border-[#E0DEF7] w-15 h-15 bg-white text-[#7065F0] rounded-full p-2',
      topic: 'Get ready to apply',
      description: 'Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!',
      style: 'w-fit p-5 leading-6 rounded-lg bg-[#7065F0] text-white'
    }
  ]

  const sectionData2 = [
    {
      style: 'pr-15 border-r-[0.09375rem] border-white',
      number: '7.4%',
      text: 'Property Return Rate'
    },
    {
      style: 'pr-15 border-r-[0.09375rem] border-white',
      number: '3,856',
      text: 'Property in Sell & Rent',
    },
    {
      number: '2,540',
      text: 'Daily Completed Transactions',
    }
  ]

  return (
    <div>
      <section className={`${styles['onLoad-animation']} w-full h-screen bg-linear-to-b from-[#E0DEF7] to-[#e0def700] pl-15 flex justify-center items-center gap-6 `}>
        <div id='main-container' className='flex flex-row flex-1 gap-8 mt-70 pr-0'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4 items-left leading-16 text-[#000929] w-136'>
              <h1 className='text-[4rem] font-bold'>Buy, rent, or sell your property easily</h1>
              <p className='text-xl'>A great platform to buy, sell, or even rent your properties without any commisions.</p>
            </div>
            <div className=''>
              <div className='bg-white flex w-74 rounded-t-xl shadow-2xl shadow-[#00000024]'>
                <button className={`p-5 pb-3 w-full ${active ? 'border-b-4 border-[#7065F0] text-[#7065F0]': ''}`}>Rent</button>
                <button className='p-5 w-full'>Buy</button>
                <button className='p-5 w-full'>Sell</button>
              </div>
              <div className='flex justify-between gap-10 bg-white w-fit p-4 rounded-b-xl rounded-tr-xl shadow-2xl shadow-[#00000024]'>
                <ul className='flex items-center gap-10'>
                  <li className='text-[#001619B2] flex flex-col pr-10 justify-center border-r-[0.09375rem] border-[#E0DEF7]'>Location <span className='text-[#000929] text-lg'>Barcelona, Spain</span></li>
                  <li className='text-[#001619B2] flex flex-col pr-10 justify-center border-r-[0.09375rem] border-[#E0DEF7]'>When <span className='text-[#000929] text-lg'>Select Move-in Date</span></li>
                </ul>
                <button className='bg-[#7065F0] text-[white] p-4 pl-6 pr-6 rounded-xl'>Browse Properties</button>
              </div>
            </div>
          </div>
          <div className='w-full pl-70'>
            <img src={landingImage1}/>
          </div>
        </div>

        <div className='absolute ml-45 text-[#000929] bg-[white] p-4 rounded-xl shadow-2xl shadow-[#00000024] w-80 flex flex-col gap-6'>
          <div className='flex flex-col gap-4 border-b-2 border-[#E0DEF7] pb-6'>
            <div className='flex gap-2 items-center'>
              <img className='w-18 h-18 rounded-full object-cover' src={PastBuyer} alt="Past Buyer" />
              <div className='text-xs leading-6'>
                <h1 className='text-[#000929] text-[1.2em] font-bold'>Manuel Villa</h1>
                <p>Renter</p>
                <div className='flex items-center w-fit'><span>Moved with</span>  <Logo scale={'65'}/></div>
              </div>
            </div>

            <div className='flex gap-2 text-xs'>
              <p className='text-[white] bg-[#000929] p-1.5 w-7.5 h-7.5 rounded-full flex place-content-center text-xl'><BiSolidQuoteAltRight/></p>
              <p>I loved how smooth the move was, and finally got the house we wanted.</p>
            </div>
          </div>
          
          <div className='flex justify-between'>
            <div className='text-[#000929] text-xl font-bold'><p>$1,500</p> <p className='text-[#0009292f] text-xs'>Saved up to</p></div>
            <div className='text-[#000929] text-xl font-bold'><p>-24 hrs</p> <p className='text-[#0009292f] text-xs'>Process time</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className='bg-[#F7F7FD] border-[0.09375rem] border-[#E0DEF7] w-fit rounded-xl p-5 flex flex-col gap-10'>
          <div>
            <h2 className='text-2xl'>The new way to find your new home</h2>
            <p>Find your dream place to live in with more than 10k+ properties listed.</p>
            <button className='bg-[#100A55] p-2 pr-4 pl-4 text-white rounded-xl'>Browse Properties</button>
          </div>
          <img className='w-30 h-30 self-end' src={Illustrations} alt='Illustration of a house' />
        </div>
      </section>

      <section className='p-50 pt-30 pb-30 leading-7 flex flex-col items-center bg-linear-to-b from-[#FFFFFF] to-[#F0EFFB]'>
        <div className='text-center mb-15'>
          <h1 className='text-[2.5rem] text-[#001619] font-bold mb-4'>Based on your location</h1>
          <p className='text-[#0009297c] text-[1rem]'>Some our picked properties near your location.</p>
        </div>

        <div className='flex w-[97%] justify-between mb-10 items-center'>
          <ul className='bg-[#F0EFFB] flex items-center border-2 border-[#E0DEF7] p-2 pr-7 justify-between w-fit gap-10 text-[#100a5565] rounded-xl'>
            <li className='border-2 border-[#E0DEF7] bg-[white] rounded-xl w-fit flex items-center gap-2 p-2 pl-4 pr-4 text-[#7065F0]'> <FaKey /> Rent</li>
            <li>Buy</li>
            <li>Sell</li>
          </ul>
          
          <div className='flex items-center w-[30%] border-2 border-[#E0DEF7] bg-[#F7F7FD] p-3 rounded-lg text-[#00092973] gap-2'>
            <label htmlFor='searchBar' className='text-[#7065F0]'><FaSearch /></label>
            <input
              className='outline-none' 
              type='text' id='searchBar' placeholder='Search...' onChange={(e) => handleSearch(e.target.value)}/>
          </div>
        </div>

        <div className={`${styles['no-scrollbar']} flex justify-start gap-6 w-full flex-wrap h-200 overflow-hidden mb-10`}>
          {filteredProperties.map(data => {
              return (
                <Link key={data.id} to={`/rent/${data.id}`}>
                  <div
                    className={`${styles['onLoad-animation']} bg-white w-[330px] h-fit scale-[0.9] relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col`}>
          
                    <img className='object-cover rounded-xl rounded-b-none z-3 bg-[white] h-47' src={data.imgUrl} alt={data.name}/>

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
                      className='bg-[#7065F0] scale-[0.9] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-40.5 -left-[0.704rem]'>
                      <FaStarOfLife />
                      <p>POPULAR</p>
                    </div>
            
                    <div
                      className='bg-[#5245ED] h-10 scale-[0.9] rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center absolute top-50 -left-[0.704rem]'>
                    </div></>: null}

                  </div>
                </Link>
              )
            })
          }
        </div>
        <Link to={'/rent'} className='bg-[#100A55] p-2 text-white rounded-lg pl-6 pr-6'>Browse more properties</Link>
      </section>

      <section className='bg-[#100A55] pt-30 pb-30 w-full flex flex-col gap-15'>
        <div className='pl-40 pb-20 border-b-[#312F4B] border-b-2'>
          <div className='flex justify-between items-center w-[85%] mb-15'>
            <h2 className='text-[2.5rem] font-bold text-white'>We make it easy for <br/> <span className='text-[#7065F0]'>tenants</span> and <span className='text-[#7065F0]'>landlords.</span></h2>
            <p className='text-[1rem] font-normal text-[#ffffffca]'>Whether it’s selling your current home, getting <br/> financing, or buying a new home, we make it easy  and <br/> efficient. The best part? you’ll save a bunch of money <br/> and time with our services.</p>
          </div>
          
          <div className={`flex gap-6 w-full overflow-scroll ${styles['no-scrollbar']}`}>
            {sectionData.map(data => {
              return(
                <div className={`${data.style} flex gap-4 h-48 items-center justify-between`}>
                  <div className={`${data.iconStyle} -mt-15`}>{data.icon}</div>
                  <div>
                    <h3 className='font-bold text-2xl mb-3'>{data.topic}</h3>

                    <p className='text-[1rem] font-normal w-90 opacity-70'>{data.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <ul className='flex gap-15 items-center self-center'>
          {sectionData2.map(data => {
            return(
              <li className={`text-[2.5rem] text-white font-bold flex flex-col items-center ${data.style}`}>{data.number}<span className='text-[1rem] font-normal opacity-70'>{data.text}</span></li>
            )
          })}
        </ul>
        
      </section>

      <section className='flex flex-col items-center justify-center gap-4 bg-linear-to-b from-[#F7F7FD] to-[#F7F7FD] p-50 pt-20 pb-20'>
        <span className='text-[#7065F0] text-2xl font-bold'>No Spam Promise</span>
        <h2 className='text-[#000929] font-bold text-[2.5rem] '>Are you a landlord?</h2>
        <p className='text-[1rem] font-normal opacity-50'>Discover ways to increase your home's value and  get listed. No Spam.</p>

        <div className='flex items-center gap-4 w-[50%] bg-[white] rounded-lg p-4'>
          <input className='w-full outline-none' placeholder='Enter your email address' />
          <button className='bg-[#7065F0] text-white rounded-lg p-3 pl-10 pr-10 w-fit'>Submit</button>
        </div>

        <p className='text-sm font-medium'>Join <span className='text-[#7065F0]'>10,000+</span> other landlords in our estatery community.</p>
      </section>
    </div>
  )
}

export default LandingPage