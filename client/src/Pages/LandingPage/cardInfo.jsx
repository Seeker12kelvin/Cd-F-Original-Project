import React from 'react'
import styles from './landingPage.module.css'

const CardInfo = ({section}) => {
  return (
    <section className='bg-[#100A55] pt-30 pb-30 w-full flex flex-col gap-15 max-sm:p-0 max-sm:pb-10 max-sm:text-center'>
      <div className='pl-40 pb-20 border-b-[#312F4B] border-b-2 max-sm:p-5'>
        <div className='flex gap-70 items-center w-full mb-15 max-sm:w-[90.5%] max-sm:m-auto max-sm:mb-10 max-sm:gap-5 max-sm:flex-col'>
          <h2 className='text-[2.5rem] w-[35%] font-bold text-white'>We make it easy for <span className='text-[#7065F0]'>tenants</span> and <span className='text-[#7065F0]'>landlords.</span></h2>
          <p className='text-[1rem] font-normal text-[#ffffffca] w-[32%]'>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
        </div>
        
        <div className={`max-sm:h-fit max-sm:flex-col max-sm:overflow-hidden flex gap-6 w-full overflow-scroll ${styles['no-scrollbar']}`}>
          {section.sectionData.map(data => {
            return(
              <div className={`${data.style} max-sm:flex-col max-sm:w-full max-sm:text-left max-sm:h-fit max-sm:items-start flex gap-4 h-48 items-center justify-between`}>
                <div className={`${data.iconStyle} -mt-15 max-sm:mt-0`}>{data.icon}</div>
                <div>
                  <h3 className='font-bold text-2xl mb-3'>{data.topic}</h3>

                  <p className='text-[1rem] font-normal w-90 opacity-70 max-sm:w-[90%]'>{data.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <ul className='max-sm:flex-col flex gap-15 items-center self-center'>
        {section.sectionData2.map(data => {
          return(
            <li className={`text-[2.5rem] text-white font-bold flex flex-col items-center ${data.style}`}>
              <strong>{data.number}</strong>
              <span className='text-[1rem] font-normal opacity-70'>{data.text}</span>
            </li>
          )
        })}
      </ul>
      
    </section>
  )
}

export default CardInfo