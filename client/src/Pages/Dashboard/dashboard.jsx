import React, { useContext } from 'react'
import "./dashboard.module.css"
import { FaDotCircle } from 'react-icons/fa';
import { CiMenuBurger, CiMenuFries, CiMenuKebab } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import User from '../../components/User';

const Dashboard = () => {

  const {userData, setUserData} = useContext(User)
  const location = useLocation()
  const { name } = location.state

  const firstName = name.split(' ')[0]
  const lastName = name.split('') === 1 ? name.split(' ')[1]: name.split('') === 3 ? name.split('')[2]: name.split(' ')[2]

  const schedulePay = [
    { label: "Total", value: '$1,500' },
    { label: "Paid", value: '$700' },
    { label: "Remaining", value: '$800' }
  ];

    const handleInput = (e) => {
      const file = e.target.files[0];
      if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData({...userData, profilePic: imageUrl});
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

        <div className='flex justify-between items-start gap-7'>
          <div className='w-[60%]'>
            <div className='border-2 border-[#E0DEF7] w-full rounded-xl p-4'>
              <h2 className='font-bold flex gap-4 items-center'>Schedule payments <span className='text-[#FFB154] text-[0.7em] bg-[#ffb25454] p-2 rounded-4xl '>DUE IN 7 DAYS</span></h2>

              <div className='flex items-center w-full h-full'>
                <div clasaName='flex w-[full] h-full'>

                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                      <div className='bg-[#7065F0] h-2 w-2 rounded-xl'>
                      </div>
                      <p>{schedulePay[0].label}</p>
                    </div>
                    <p className=''>{schedulePay[0].value}</p>
                  </div>

                  <div className='flex flex-col gap-2 border-l-2 border-[#E0DEF7] pl-6'>
                    <div className='flex items-center gap-2'>
                      <div className='bg-[#27AE60] h-2 w-2 rounded-xl'>
                      </div>
                      <p>{schedulePay[0].label}</p>
                    </div>
                    <p className=''>{schedulePay[0].value}</p>
                  </div>

                  <div className='flex flex-col gap-2 border-l-2 border-[#E0DEF7] pl-6'>
                    <div className='flex items-center gap-2'>
                      <div className='bg-[#F06565] h-2 w-2 rounded-xl'>
                      </div>
                      <p>{schedulePay[0].label}</p>
                    </div>
                    <p className=''>{schedulePay[0].value}</p>
                  </div>
                </div>
                <button className='bg-[#7065F0] text-[white] p-2 rounded-xl'>Schedule Payment</button>
              </div>

            </div>
          </div>

          <div className='border-2 border-[#E0DEF7] h-full p-6 w-[40%] rounded-xl'>
            <div>
              <h2 className='font-bold'>My Profile</h2>
              <CiMenuKebab />
            </div>

            <div className='flex flex-col items-center'>
              {userData.profilePic ? 
              <img src={userData.profilePic} 
                className='w-30 h-30 object-cover rounded-full'
                alt='user profile picture'/> 
              : 
              <div><input onChange={handleInput} type='file' accept='/image/jpeg, image/png'/></div>}

              <h2 className='text-xl font-bold'>{firstName} {lastName}</h2>
              <p>Houston, TX</p>

              <div>

              </div>
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