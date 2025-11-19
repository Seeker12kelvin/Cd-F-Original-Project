import React from 'react';
import styles from "./rentDetails.module.css";
import { useNavigate, useParams, Link } from 'react-router-dom';
import properDetails from '../../../data/data';
import { FaBath, FaBed, FaCheckCircle, FaHome, FaLessThan, FaMapMarker, FaPaintBrush, FaQuestionCircle, FaReadme, FaSearch, FaSearchLocation, FaSquare, FaStarOfLife, FaVideo } from 'react-icons/fa';
import { CiHeart, CiShare2 } from 'react-icons/ci';
import Owner from "../../../Images/ListingOwner.png";
import Squares from "../../../Images/Square-Meters-Outline.png";

const RentDetails = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const details = properDetails.filter(data => data.id === id)
  console.log(id)

  const rentalFeatures = [
    {grey: 'Listed on', black: '1 week'},
    {grey: 'Date available', black: 'Available now'},
    {grey: 'Type', black: 'Home'},
    {grey: 'Laundry', black: 'In unit'},
    {grey: 'Cooling', black: 'Air Conditioner'},
    {grey: 'Heating', black: 'Forced Air'}
  ]

  const twoRentalFeatures = [
    {grey: 'City', black: 'Miami'},
    {grey: 'Year Built', black: '2018'},
    {grey: 'Size', black: '2,173 sqft'},
    {grey: 'Lot Size', black: '9,060 sqft'},
    {grey: 'Parking Area', black: 'Yes'},
    {grey: 'Deposit & Fees', black: '$2,400'}
  ]

  const rentalFeaturesStyling = {light: 'text-[#6C727F]', dark:'text-[#000929] font-bold text-right', size: 'text-[1em]'}
  
  return (
    <div className='flex flex-col gap-5'>
      <button
        onClick={() => navigate(-1)}
        className='flex p-20 pt-30 items-center gap-2 text-[#7065F0]'><FaLessThan /> 
        Back to map
      </button>

      {details.map(data => {
        return(
          <>
            <section id={`Details-of-${data.name}`} className='flex flex-col gap-10 p-20 pt-30' key={data.id}>
              <div>
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

                  <div className='flex flex-col gap-10 pb-15 border-b-2 border-[#F0EFFB]'>
                    <h3 className='text-2xl text-[#000929] font-bold'>About this home</h3>
                    <p className='text-[1em] font-light tracking-wider leading-7'>{data.description}</p>

                    <div className='bg-[#F7F7FD] border-2 border-[#F0EFFB] p-4 flex flex-col gap-4 rounded-xl'>
                      <p className='text-[#00092960] text-[1em]'>Listed by property owner</p>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                          <img
                            className='h-12 rounded-[50%] float-left mr-5'
                            src={Owner} alt=''/>
                          <div>
                            <h3 className='text-[1em] font-bold'>Madina Aulia</h3>
                            <p className='text-sm text-[#00092950]'>Rich Capital Properties LLC</p>
                          </div>
                        </div>

                        <div className='flex gap-2'>
                          <button className='bg-[#E8E6F9] h-5 text-[#7065F0] p-7 rounded-xl flex items-center'>Ask a question</button>
                          <button className='bg-[#E8E6F9] h-5 text-[#7065F0] p-7 rounded-xl flex items-center'><FaQuestionCircle /> Get more info</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id='rental-feature' className='leading-11 border-b-2 border-[#E0DEF7] pb-10 w-full flex flex-col'>
                    <h3 className='text-2xl font-bold mb-5'>Rental features</h3>

                    <div className='flex gap-20 items-center w-full'>
                      <div className='flex w-[50%] items-center justify-between'>
                        <div>
                          {rentalFeatures.map((feature, index) => <p className={`${rentalFeaturesStyling.light} ${rentalFeaturesStyling.size}`} key={index}>{feature.grey}</p>)}
                        </div>
                        <div>
                          {rentalFeatures.map((feature, index) => <p className={`${rentalFeaturesStyling.dark} ${rentalFeaturesStyling.size}`} key={index}>{feature.black}</p>)}
                        </div>
                      </div>

                      <div className='flex w-[50%] items-center justify-between'>
                        <div>
                          {twoRentalFeatures.map((feature, index) => <p className={`${rentalFeaturesStyling.light} ${rentalFeaturesStyling.size}`} key={index}>{feature.grey}</p>)}
                        </div>
                        <div>
                          {twoRentalFeatures.map((feature, index) => <p className={`${rentalFeaturesStyling.dark} ${rentalFeaturesStyling.size}`} key={index}>{feature.black}</p>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='Details-price' className='h-fit flex flex-col gap-6 p-6 border-2 border-[#F0EFFB] rounded-xl w-[33%]'>
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

                  <input
                    className='border-2 border-[#F0EFFB] p-3 rounded-xl'
                    type='date' 
                  />

                  <button className='p-3 pl-6 pr-6 bg-[#100A55] flex items-center justify-center text-white rounded-xl gap-2'><FaMapMarker />Request a tour</button>

                  <p className='text-xs text-[#6C727F]'>It's free with no obligation-cancel anytime.</p>
                </div>

              </div>
            </section>

            <section id='similar-listings' className='bg-[#F7F7FD] w-full h-fit p-20 flex flex-col items-start'>
                      
              <h2 className='text-2xl font-bold'>Similar listings</h2>
              <div className={`flex items-center w-full gap-6 ${styles['no-scrollbar']} overflow-scroll p-6 pl-0`}>
                {properDetails.filter(detail => detail.beds === data.beds).map(list => {return(
                    <Link key={list.id} to={`/rent/${list.id}`}>
                      <div
                        className=' bg-white w-[330px] h-fit relative shadow-xl shadow-[#00000010] rounded-2xl border-[#D6DDEB] border-2 flex flex-col'>
              
                        <img className='object-cover rounded-xl rounded-b-none z-3 h-full' src={list.imgUrl} alt={list.name}/>

                        <div className='bg-white h-full w-full z-3 flex rounded-b-2xl gap-4 flex-col p-6'>
              
                          <div className='border-b border-[#F0EFFB] pb-2 flex bg-[white] h-full items-center justify-between'>
                            <div className='flex flex-col gap-2'>
                              <h3 className='text-[#7065F0] text-xl font-bold'>{list.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
                              <h3 className='font-bold text-2xl'>{list.name}</h3>
                              <p className='text-[#6C727F] text-[0.86em]'>{list.location}</p>
                            </div>
                            <div className='border-2 border-[#F0EFFB] p-1 -mt-10 rounded-[50%] w-fit'>
                              <CiHeart className='text-[#7065F0] text-2xl '/>
                            </div>
                          </div>
                
                          <div className='flex gap-3 self-center bg-[white]'>
                            <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {list.beds} Beds</p>
                            <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {list.bathrooms} Bathrooms</p>
                            <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {list.squareFeet}</p>
                          </div>

                        </div>

                        {list.popular ? <><div 
                          className='bg-[#7065F0] text-white text-[0.87em] rounded-xl rounded-bl-none p-2 pl-3 flex gap-2 items-center z-5 absolute top-42.5 -left-[0.704rem]'>
                          <FaStarOfLife />
                          <p>POPULAR</p>
                        </div>
                
                        <div 
                          className='bg-[#5245ED] h-10 rotate-45 w-[100px] text-white text-sm rounded-xl rounded-bl-none p-2 flex gap-2 items-center absolute top-52 -left-[0.704rem]'>
                        </div></>: null}
              
                      </div>
                    </Link>
                )})}
              </div>
            </section>

          </>
          
        )
      })}
    </div>
  )
}

export default RentDetails