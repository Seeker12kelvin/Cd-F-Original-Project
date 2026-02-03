import { useContext } from 'react'
import User from '../../../components/User'
import styles from "./profile.module.css"
import { BsPersonFill } from "react-icons/bs";

const Profile = () => {

  const { userData } = useContext(User)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`${styles['Profile-form']} m-auto mt-20.5 w-157 shadow-md`}>

      <div className={`${styles['first-section']} gap-4 mb-6 border-b-[0.09375rem] pb-6 p-5 border-[#E0DEF7]`}>

        <h2 className='font-medium text-xl'>Personal Info</h2>

        <h4>Avatar</h4>

        <div className='flex gap-4 items-center'>
          {
          userData.profilePic
          ?
          <input type="file" accept="image/*" />
          :
          <div className='bg-[#E0DEF7] rounded-full h-24 w-24 flex items-center justify-center'>
            <BsPersonFill className='text-6xl text-white bg-transparent rounded-full' />
          </div>
          }
          <button type="button" className='bg-[#7065F0] text-white'>Upload</button>
          <button type="button" className='border-2 border-[#E0DEF7] text-[#7065F0]'>Remove</button>
        </div>

      </div>
      
      {/* Profile settings form or content goes here */}

      <div className={`${styles['second-section']} pt-0 p-5 border-b-[0.09375rem] border-[#E0DEF7]`}>

        <div className={`${styles['second-section-div']}`}>
          <label htmlFor='visible-name'>
            <p>Display Name<span>(Visible to others)</span></p>
            <input id='visible-name' type="text" name="visibile-name" placeholder='Francis'/>
          </label>

          <label htmlFor='given-name'>
            <p>Name<span>(Your given name)</span></p>
            <input id='given-name' type="text" name="given-name" placeholder='Francis Heather'/>
          </label>
        </div>

        <label>
          Phone Number
          <input type="tel" placeholder=''/>
        </label>
        
        <div className='flex flex-col gap-3'>
          <h4 className=''>Reviews</h4>

          <p className='text-[#0009297e]'>Manage the reviews you’ve written for professionals, rentals, and more.</p>

          <span className='text-[#7065F0]'>Manage</span>
        </div>

      </div>

      <button type="submit" className='bg-[#7065F0] text-white ml-auto m-5'>Save Changes</button>

    </form>
  )
}

export default Profile