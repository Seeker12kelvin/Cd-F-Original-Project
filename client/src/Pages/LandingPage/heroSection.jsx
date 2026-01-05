import React, { useState } from 'react'
import styles from './landingPage.module.css'
import PastBuyer from '../../Images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash 1.png';
import landingImage1 from '../../Images/landing-image.png';
import { BiSearch, BiSolidQuoteAltRight } from 'react-icons/bi';
import Logo from '../../components/Logo';

const  HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Rent')

  return (
    <section className={`${styles['onLoad-animation']} w-full min-h-screen px-4 sm:px-10 lg:px-20 bg-linear-to-b from-[#E0DEF7] to-[#e0def700]  flex justify-center items-center gap-6 max-sm:pl-0 max-sm:`}>
      <div id='main-container' className='flex flex-row flex-1 gap-8 mt-70 pr-0 max-sm:mt-0'>
        <div className='flex flex-col gap-10 max-sm:items-center max-sm:justify-start '>
          <div className='flex flex-col gap-4 items-left leading-16 text-[#000929] w-136 max-sm:text-center max-sm:w-[80%] max-sm:-mt-20
          max-sm:leading-12'>
            <h1 className='text-[4rem] font-bold max-sm:text-[2.5rem]'>Buy, rent, or sell your property easily</h1>
            <p className='text-xl'>A great platform to buy, sell, or even rent your properties without any commisions.</p>
          </div>
          <div className=''>
            <nav aria-label="Property type">
              <ul className='bg-white flex w-fit rounded-t-xl shadow-2xl shadow-[#00000024]'>
                <li><button className={`p-5 pb-3 w-full ${activeTab === 'Rent' ? 'border-b-4 border-[#7065F0] text-[#7065F0]': ''}`}>Rent</button></li>
                <li><button className='p-5 w-full'>Buy</button></li>
                <li><button className='p-5 w-full'>Sell</button></li>
              </ul>
            </nav>

            <div className='flex items-center justify-between gap-10 bg-white w-fit p-4 rounded-b-xl rounded-tr-xl shadow-2xl shadow-[#00000024] max-sm:rounded-none max-sm:w-74'>
              <ul className='flex items-center gap-10 max-sm:hidden'>
                <li className='text-[#001619B2] flex flex-col pr-10 justify-center border-r-[0.09375rem] border-[#E0DEF7]'>Location <span className='text-[#000929] text-lg'>Barcelona, Spain</span></li>
                <li className='text-[#001619B2] flex flex-col pr-10 justify-center border-r-[0.09375rem] border-[#E0DEF7]'>When <span className='text-[#000929] text-lg'>Select Move-in Date</span></li>
              </ul>
              <p className='sm:hidden'>Search location</p>
              <button className='bg-[#7065F0] text-white p-4 rounded-xl sm:hidden'><BiSearch/></button>
              <button className='bg-[#7065F0] text-[white] p-4 pl-6 pr-6 rounded-xl max-sm:hidden'>Browse Properties</button>
            </div>
          </div>
        </div>
        <div className='w-full pl-70 max-sm:hidden'>
          <img src={landingImage1}/>
        </div>
      </div>

      <div className='max-sm:hidden absolute ml-45 text-[#000929] bg-[white] p-4 rounded-xl shadow-2xl shadow-[#00000024] w-80 flex flex-col gap-6'>
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
  )
}

export default HeroSection