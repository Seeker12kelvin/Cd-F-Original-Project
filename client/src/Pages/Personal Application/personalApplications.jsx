import React, { useMemo } from 'react'
import styles from './personalApplications.module.css'
import { Link, useParams } from 'react-router-dom'
import properDetails from '../../data/data'
import Squares from "../../Images/Square-Meters-Outline.png";
import { FaBath, FaBed, FaGasPump, FaInternetExplorer, FaPhone } from 'react-icons/fa';
import { RiErrorWarningLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";

const PersonalApplications = () => {

  const { id } = useParams()
  
  const details = useMemo(
    () => properDetails.find(item => item.id == id),
    [id]
  )

  const utilityBox = [
    {
      word: 'Electricity',
      icon: <MdElectricBolt className='text-[#7065F0]'/>
    },
    {
      word: 'Gas',
      icon: <FaGasPump className='text-[#7065F0]'/>
    },
    {
      word: 'Phone',
      icon: <FaPhone className='text-[#7065F0]'/>
    },
    {
      word: 'Internet',
      icon: <FaInternetExplorer className='text-[#7065F0]'/>
    }
  ]

  return (
    <>

      <div className='border-b border-[#F0EFFB] w-full flex justify-center pb-8 mb-8'>
        <div className='w-170 h-40 flex gap-7 shadow-xl rounded-lg border-[#F0EFFB] border-[0.09375rem] '>
          <img className='w-[35%] object-cover rounded-l-lg' src={details.imgUrl} alt={`A picture of ${details.name}`} />

          <div className='self-center w-[65%]'>
            <div className='flex flex-col gap-1 border-b mb-2 pb-2 border-[#F0EFFB]'>
              <h3 className='text-[#7065F0] text-[1rem] font-bold'>{details.price}<span className='text-[#6C727F] text-sm'>/month</span></h3>
              <h3 className='font-bold text-lg'>{details.name}</h3>
              <p className='text-[#6C727F] text-[0.86em]'>{details.location}</p>
            </div>
            <div className='flex gap-3 self-center bg-[white]'>
              <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {details.beds} Beds</p>
              <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {details.bathrooms} Bathrooms</p>
              <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {details.squareFeet}</p>
            </div>
          </div>
        </div>
      </div>

      <section className='w-170 h-fit flex flex-col gap-3 mb-20'>
        <h2 className='text-[#000929] text-2xl font-bold'>Personal Details</h2>
        <p className='text-[#6C727F] text-[1rem] mb-7'>Please start your profile below by filling in your personal information </p>

        <form className='flex flex-col gap-6'>
          <fieldset className={`${styles['personal-fieldset']} gap-6`}>
            <h3 className='text-[#000929] text-lg font-bold'>Applicant Details</h3>
            <div className='flex w-full gap-7 justify-between items-center'>
              <label htmlFor='title' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Title
                <select disabled id='title' className={`${styles['personal-select']} p-4 rounded-xl`}>
                  <option className='text-[#000929]'>Select title</option>
                </select>
              </label>
              
              <label htmlFor='name' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Name
                <input 
                  id='name' 
                  type='text' 
                  name='name'
                  required
                  placeholder='Full name' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
            </div>

            <label id='dateOfBirth' className='flex flex-col text-[#000929] text-sm font-medium gap-2'>
              Date of Birth
              <input 
                type='date' 
                id='dateOfBirth' 
                required
                className={`${styles['personal-input']} p-4 rounded-xl`}/>
            </label>

            <div className='flex w-full gap-7 justify-between items-center'>
              <label htmlFor='email' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Email
                <input 
                  id='email'
                  type='email' 
                  name='email' 
                  required
                  placeholder='hi@example.com' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
              <label htmlFor='phoneNumber' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Phone Number
                <input 
                  id='phoneNumber' 
                  type='tel'
                  name='phoneNumber' 
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder='+1 (234) 567 - 891' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
            </div>

            <div className='flex w-full gap-7 justify-between items-center'>
              <label htmlFor='driversLicense' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                <p>Drivers License Number <span className='text-[#7065F0]'>(if applicable)</span></p>
                <input 
                  id='driversLicense' 
                  type='text' 
                  name='driversLicense' 
                  required
                  placeholder='e.g. AB1234' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
              <label htmlFor='driversLicenseState' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Drivers License State
                <select disabled id='title' className={`${styles['personal-select']}`}>
                  <option className='text-[#000929]'>Select one</option>
                </select>
              </label>
              
            </div>

            <div className='flex w-full gap-7 justify-between items-center'>
              <label htmlFor='social-security-number' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Social Security Number
                <input 
                  id='social-security-number' 
                  type='number' 
                  name='social-security-number' 
                  required
                  placeholder='e.g. AAA-GG-SSSS' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
              <legend className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                <span className='flex items-center gap-2'>
                  Will you be receiving GRA? 
                  <div className='bg-[#7165f038] p-2 text-[#7065F0] flex items-center rounded-full w-5 h-5'>!</div>
                </span>
                
                <div className='flex items-center gap-6'>
                  <label htmlFor='yes' className='gap-2'>
                    <input 
                      id='yes' 
                      name='Recieving-GRA' 
                      required
                      type='radio' 
                      className={`${styles['personal-input']} p-4 rounded-xl`}/>
                    Yes
                  </label>

                  <label htmlFor='no' className='gap-2'>
                    <input 
                      id='no' 
                      name='Recieving-GRA' 
                      required
                      type='radio'
                      className={`${styles['personal-input']} p-4 rounded-xl`}/>
                    No
                  </label>
                </div>
              </legend>
            </div>
            <label htmlFor='SSN-number' className='gap-3'>
              <input 
                id='SSN-number' 
                type='checkbox' 
                name='SSN-number' 
                required
                className={`${styles['personal-input']} p-4 rounded-xl`} />
              I don't have a SSN number
            </label>
          </fieldset>
          
          <fieldset className={`${styles['personal-fieldset']} gap-4`}>
            <h3 className='text-[#000929] text-lg font-bold flex items-center gap-2'>
              Vehicles
              <div className='bg-[#7165f038] p-2 text-[#7065F0] flex items-center justify-center rounded-full w-5 h-5'>!</div>
            </h3>

            <label htmlFor='vehicles'  className='gap-3'>
              <input 
                type='checkbox' 
                id='vehicles' 
                name='vehicles' 
                required
                className={`${styles['personal-input']} p-4 rounded-xl`} />
              Tick here if a vehicle will be on the premises
            </label>
          </fieldset>

          <fieldset className={`${styles['personal-fieldset']} gap-6`}>
            <h3 className='text-[#000929] text-lg font-bold flex flex-col gap-2'>
              Personal Reference Details
              <span className='text-[#6C727F] text-sm font-normal'>Provided by an individual who knows you well and can vouch your character and abilities. </span>
            </h3>

            <div className='flex w-full gap-7 justify-between items-center'>

              <label htmlFor='name' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Name
                <input 
                  id='name' 
                  type='text' 
                  name='name' 
                  required
                  placeholder='Full name' 
                  className={`${styles['personal-input']} p-4 rounded-xl`} />
              </label>

              <label htmlFor='title' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Title
                <select disabled id='title' className={`${styles['personal-select']} p-4 rounded-xl`}>
                  <option className='text-[#000929]'>Select relationship</option>
                </select>
              </label>
              
            </div>

            <label htmlFor='how-long-relationship-is' className='w-full flex gap-0'>How many years have you known them?</label>

            <div className='-mt-4'>
              <input 
                type="text"
                id='how-long-relationship-is' 
                name='how-long-relationship-is'
                required
                placeholder='Years'
                className={`w-[50%] border-[#D6DDEB] p-4 outline-none border-r-[0.09375rem] border-[0.09375rem] rounded-lg rounded-r-none`} />
              <input 
                type="month"
                id='how-long-relationship-is'
                name='how-long-relationship-is'
                required
                placeholder='Months' 
                className={`w-[50%] border-[#D6DDEB] p-4 outline-none border-l-0 border-[0.09375rem] rounded-lg rounded-l-none`}/>
            </div>

            <div className='flex w-full gap-7 justify-between items-center'>
              <label htmlFor='email' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Email
                <input 
                  id='email' 
                  type='email' 
                  name='email' 
                  required
                  placeholder='hi@example.com' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
              <label htmlFor='phoneNumber' className='flex flex-col text-[#000929] text-sm font-medium w-[50%] gap-2'>
                Phone Number
                <input 
                  id='phoneNumber'
                  type="tel" 
                  name='phoneNumber' 
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder='+1 (234) 567 - 891' 
                  className={`${styles['personal-input']} p-4 rounded-xl`}/>
              </label>
              
            </div>

            <div className='flex items-start gap-2 bg-[#E0DEF7] p-4 rounded-xl'>
              <input 
                type="checkbox"
                name='authority'
                id='authority'
                className={`${styles['personal-input']} p-4 rounded-xl mt-1`}
              />
              
              <p htmlFor='authority' className='text-[#0009297a] text-sm'>I give the authority to my Referees to release all my personal information relating to my rental application. I acknowledge the reference answers are confidential between the real estate agent and the referee. <Link className='text-[#7065F0] underline'>View the terms.</Link></p>
            </div>

            <button type="button" className='bg-[#7065F0] p-4 pl-20 pr-20 w-fit text-white rounded-xl'>Send reference email</button>
          </fieldset>

          <fieldset className={`border-[#E0DEF7] border-[0.09375rem] rounded-lg gap-6`}>
            <div className='p-8 pt-5 pb-5 flex flex-col gap-6 border-b-[0.09375rem] border-[#E0DEF7]'>
              <h3 className='text-[#000929] text-lg font-bold flex items-center gap-2'>
                Additional Occupants
                <div className='bg-[#7165f038] p-2 text-[#7065F0] flex items-center justify-center rounded-full w-5 h-5'>!</div>
              </h3>

              <label htmlFor='occupants' className='text-[#000929] font-medium text-sm flex items-start gap-2'>
                <input 
                  type="checkbox"
                  name='occupants'
                  id='occupants'
                  className={`${styles['personal-input']} p-4 rounded-xl mt-1.5`}
                />
                
                Tick here if there will be other people living in the property who WILL NOT be applying as a joint or invited applicant to be on the lease
              </label>
            </div>

            <p className='text-[#9EA3AE] p-8 pt-5 pb-5 text-sm'>e.g. children</p>
          </fieldset>

          <fieldset className={`border-[#E0DEF7] border-[0.09375rem] rounded-lg gap-6`}>
            <div className='p-8 pt-5 pb-5 mb-3 flex flex-col gap-6 border-b-[0.09375rem] border-[#E0DEF7]'>
              <h3 className='text-[#000929] text-lg font-bold flex items-center gap-2'>
                Utility Connections
                <div className='bg-[#7165f038] p-2 text-[#7065F0] flex items-center justify-center rounded-full w-5 h-5'>!</div>
              </h3>

              <label htmlFor='utility-service' className='text-[#000929] font-medium text-sm flex items-start gap-2'>
                <input 
                  type="checkbox"
                  name='utility-service'
                  id='utility-service'
                  className={`${styles['personal-input']} p-4 rounded-xl mt-1.5`}
                />
                
                I/We would like to be contacted by a utility service
              </label>
            </div>

            <label className='text-[#9EA3AE] p-8 pt-5 pb-5 text-sm'>To opt-out please uncheck the above</label>
            <div className='flex items-center gap-10 p-8 pt-3 pb-5'>
              {utilityBox.map(data => {
                return(
                  <label htmlFor={`${data.word}`} className='flex items-center gap-2'>
                    <input 
                      type="checkbox"
                      name={`${data.word}`}
                      id={`${data.word}`}
                      className={`${styles['personal-input']} p-4 rounded-xl`}
                    />
                    <span className='flex items-center gap-1'>{data.icon}{data.word}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
          
          <hr className='border-[#F0EFFB]'/>

          <button type="submit" className='bg-[#7065F0] p-4 w-[50%] text-white rounded-xl'>Continue</button>
        </form>
      </section>
    </>
  )
}

export default PersonalApplications