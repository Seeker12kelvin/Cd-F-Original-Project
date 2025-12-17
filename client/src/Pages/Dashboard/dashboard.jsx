import React, { useContext } from 'react'
import styles from "./dashboard.module.css"
import { FaBath, FaBed, FaDotCircle } from 'react-icons/fa';
import { CiMenuBurger, CiMenuFries, CiMenuKebab } from 'react-icons/ci';
import User from '../../components/User';
import properDetails, { favoriteDetails } from '../../data/data';
import FavoriteButton from '../../components/favoriteFunction';
import Squares from "../../Images/Square-Meters-Outline.png";
import Percentage from '../../Images/Percentage.svg'
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const {userData, setUserData} = useContext(User)
  const name = userData.name

  const firstName = name.split(' ')[0]
  const lastName = name.split('') === 1 ? name.split(' ')[1]: name.split('') === 3 ? name.split('')[2]: name.split(' ')[2]

  const schedulePay = [
    { label: "Total",
      style: 'border-[#E0DEF7] border-r pr-5',
      value: '$1,500' 
    },
    { label: "Paid",
      style: 'border-[#E0DEF7] border-r pr-5', 
      value: '$700' 
    },
    { label: "Remaining", 
      value: '$800'
    }
  ];

  const handleInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData(prev => ({...prev, profilePic: imageUrl}));
    }
  }

  return (
    <div className='flex gap-10 justify-between items-center p-10'>
      <div className='w-[70%] flex flex-col gap-7'>
        <div className='bg-[#F0EFFB] flex items-center justify-between p-4 rounded-xl border-[#7065F0] border-2 w-full '>
          <div className='h-full'>
            <h2 className='text-[#000929] text-[1em] font-bold'>Review Tenant Application</h2>
            <p className='text-[#00092970]'>Let's review your tenant application and get tips from us.</p>
          </div>
          <button className='p-2 bg-white text-[#7065F0] rounded-xl border-2 border-[#E0DEF7]'>Review my application</button>
        </div>

        <div className='flex justify-between items-start gap-5'>
          <div className='w-[68%] flex flex-col gap-5'>
            <div className='border-2 border-[#E0DEF7] w-full rounded-xl p-4'>
              <h2 className='font-bold flex gap-4 items-center'>Schedule payments <span className='text-[#FFB154] text-[0.7em] bg-[#ffb25454] p-2 rounded-4xl '>DUE IN 7 DAYS</span></h2>

              <div className='flex items-center w-full h-full'>
                <ul className={`flex gap-5 w-full`}>
                  {schedulePay.map(data => {
                      return(
                        <li className={`${data.style} flex flex-col h-[50%] text-sm text-[#6C727F]`}>{data.label}
                        <span className={`text-lg text-[#000929] ${styles[`circle-list`]} font-bold`}>{data.value}</span></li>
                      )
                    })
                  }
                </ul>
                <button className='bg-[#7065F0] text-[white] p-2 rounded-xl'>Schedule Payment</button>
              </div>

            </div>
            
            <div className='border-2 border-[#E0DEF7] rounded-xl'>
              <div className='mb-2 p-4'>
                <h3 className='text-lg font-bold'>Properties</h3>
                <p className='text-sm w-full text-[#6C727F] font-medium'>From the most recent properties you see.</p>
              </div>
              <hr className='border-[#F0EFFB] mb-4'/>
              <div className={`overflow-scroll flex flex-col p-4 pt-0 gap-10 ${styles['no-scrollbar']} h-85`}>
                {properDetails.map(data => {
                  return(
                    <Link to={`/tenancy-applications/${data.id}`} className='flex flex-col gap-4 h-full items-start'>
                      <div className='w-full flex items-center gap-3'>
                        <img className="w-[70%] rounded-xl" src={data.imgUrl} alt={data.name} />
                        <div className="w-[30%] flex flex-col gap-3 h-full">
                          <img className="rounded-xl h-full" src={data.imgUrl} alt={`${data.name}`} />
                          <img className="rounded-xl h-full" src={data.imgUrl} alt={`${data.name}`} />
                        </div>
                      </div>
                      
                      <div className='flex justify-between pb-3 border-b border-[#F0EFFB] w-full'>
                        <div>
                          <p className='text-xl font-bold'>{data.name}</p>
                          <p className='text-[1rem] text-[#6C727F] font-medium'>{data.location}</p>
                        </div>
                        <div className='border border-[#F0EFFB] flex items-center p-2 h-fit rounded-full w-fit'>
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
                      <div className='flex gap-3 bg-[white]'>
                        <p className='flex text-sm items-center gap-1'><FaBed className='text-[#7065F0]'/> {data.beds} Beds</p>
                        <p className='flex text-sm items-center gap-1'><FaBath className='text-[#7065F0]'/> {data.bathrooms} Bathrooms</p>
                        <p className='flex text-sm items-center gap-1'><img className='h-4' src={Squares} alt='Square Meters' /> {data.squareFeet}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='border-2 border-[#E0DEF7] h-full p-6 w-[35%] flex flex-col gap-6 rounded-xl'>
            <div className='flex justify-between'>
              <h2 className='font-bold'>My Profile</h2>
              <CiMenuKebab size={'20px'} className='rotate-90' />
            </div>

            <div className='flex flex-col gap-3 text-center'>
              {userData.profilePic ?
              <img
                src={userData.profilePic}
                className='w-25 h-25 object-cover self-center rounded-full'
                alt='user profile picture'/>
              :
              <div><input onChange={handleInput} type='file' accept='image/jpeg,image/png'/></div>}

              <h2 className='text-xl font-bold'>{firstName} {lastName}</h2>
              <p className='text-lg text-[#00092953]'>Houston, TX</p>

              <div className='border-b border-[#E0DEF7] text-[black] pb-7'>
                <button
                  className='bg-[#E8E6F9] p-2.5 rounded-xl mt-4 w-full'>518 ..... <span className='text-[#7065F0]'>Show SSN</span></button>
              </div>
              <div className='flex justify-between items-center border-b border-[#E0DEF7] pb-4'>
                <p className='text-[#000929] opacity-50'>Credit Score</p>
                <p className='text-[#459D81] '>750 (Good)</p>
              </div>
            </div>
            <div className='bg-[#100A55] flex flex-col items-center gap-5 relative p-4 rounded-xl text-center text-white'>
              <h3 className='text-[1em] font-bold'>Rent Application Chance</h3>
              <img 
                className='' src={Percentage} alt='percentage-image'/>
              <h3 className='text-[2rem] absolute mt-23 font-bold'>70%</h3>
              <p className='font-extralight text-xs'>Chance of your tenancy <br /> application to get approved.</p>
            </div>
          </div>
        </div>
        
      </div>
      <aside className='w-[30%]'>
        <div>November 21</div>

        <div>
          Recent Activities
        </div>
      </aside>
    </div>
  )
}

export default Dashboard