import React, { useState } from 'react';
import { FaReadme, FaVideo } from 'react-icons/fa';
import { FaHouseCircleCheck } from 'react-icons/fa6';
import HeroSection from './heroSection';
import PropertyInfo from './Property/propertyInfo';
import PropertyListSection from './Property/propertyListSection';
import CardInfo from './cardInfo';
import LandlordInfo from './landlordInfo';

const LandingPage = () => {

  const [sectionData, setSectionData] = useState([
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
  ])

  const [sectionData2, setSectionData2] = useState([
    {
      style: 'pr-15 border-r-[0.09375rem] max-sm:pb-15 max-sm:border-b-[0.09375rem] max-sm:pr-0 max-sm:border-r-[0] border-white',
      number: '7.4%',
      text: 'Property Return Rate'
    },
    {
      style: 'pr-15 border-r-[0.09375rem] max-sm:pb-15 max-sm:border-b-[0.09375rem] max-sm:pr-0 max-sm:border-r-[0] border-white',
      number: '3,856',
      text: 'Property in Sell & Rent',
    },
    {
      number: '2,540',
      text: 'Daily Completed Transactions',
    }
  ])

  return (
    <main className='overflow-x-hidden w-screen max-sm:border'>
      
      <HeroSection/>

      <PropertyInfo />

      <PropertyListSection/>

      <CardInfo section={{sectionData, sectionData2}}/>

      <LandlordInfo />
    </main>
  )
}

export default LandingPage